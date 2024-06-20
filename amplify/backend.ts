import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import {
  Effect,
  ManagedPolicy,
  PolicyDocument,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";
import { AppSync } from "aws-cdk-lib/aws-events-targets";
import {
  EventBus,
  EventField,
  Rule,
  RuleTargetInput,
} from "aws-cdk-lib/aws-events";
import { publishOrderFromEventBridge } from "./data/graphql/mutations";
import { AuthorizationType, GraphqlApi } from "aws-cdk-lib/aws-appsync";
import { Stack } from "aws-cdk-lib";

export const backend = defineBackend({
  auth,
  data,
});

const apiStack = backend.createStack("MyLibraryStack");

const eventStack = backend.createStack("MyExternalDataSources");

const eventBus = EventBus.fromEventBusName(eventStack, "MyEventBus", "default");

backend.data.addEventBridgeDataSource("EventBridgeDataSource", eventBus);

const cloudWatchLogsRole = new Role(apiStack, "MyLibraryCloudWatchRole", {
  roleName: "MyLibraryCloudWatchRole",
  assumedBy: new ServicePrincipal("appsync.amazonaws.com"),
  managedPolicies: [
    ManagedPolicy.fromAwsManagedPolicyName(
      "service-role/AWSAppSyncPushToCloudWatchLogs"
    ),
  ],
});

backend.data.resources.cfnResources.cfnGraphqlApi.logConfig = {
  cloudWatchLogsRoleArn: cloudWatchLogsRole.roleArn,
  fieldLogLevel: "ALL",
  excludeVerboseContent: false,
};

// Create the Policy Statement
const policyStatement = new PolicyStatement({
  effect: Effect.ALLOW,
  actions: ["appsync:GraphQL"],
  resources: [`${backend.data.resources.graphqlApi.arn}/types/Mutation/*`],
});

// Create the Role and attach the policy
const eventBusRole = new Role(eventStack, "AppSyncInvokeRole", {
  assumedBy: new ServicePrincipal("events.amazonaws.com"),
  inlinePolicies: {
    PolicyStatement: new PolicyDocument({
      statements: [policyStatement],
    }),
  },
});

const rule = new Rule(eventStack, "MyNewOrderRule", {
  eventBus,
  ruleName: "broadcastOrderStatusChange",
  eventPattern: {
    source: ["amplify.orders"],
    detailType: ["OrderStatusChange"],
    detail: {
      orderId: [{ exists: true }],
      status: ["PENDING", "SHIPPED", "DELIVERED"],
      message: [{ exists: true }],
    },
  },
});

const api = GraphqlApi.fromGraphqlApiAttributes(
  Stack.of(backend.data),
  "MyGraphqlApi",
  { graphqlApiId: backend.data.resources.graphqlApi.apiId }
);

rule.addTarget(
  new AppSync(api, {
    graphQLOperation: publishOrderFromEventBridge,
    variables: RuleTargetInput.fromObject({
      orderId: EventField.fromPath("$.detail.orderId"),
      status: EventField.fromPath("$.detail.status"),
      message: EventField.fromPath("$.detail.message"),
    }),
  })
);
// const rule = new aws_events.CfnRule(eventStack, "MyOrderRule", {
//   eventBusName: eventBus.eventBusName,
//   name: "broadcastOrderStatusChange",
//   eventPattern: {
//     source: ["amplify.orders"],
//     ["detail-type"]: ["OrderStatusChange"],
//     detail: {
//       orderId: [{ exists: true }],
//       status: ["PENDING", "SHIPPED", "DELIVERED"],
//       message: [{ exists: true }],
//     },
//   },
//   targets: [
//     {
//       id: "orderStatusChangeReceiver",
//       arn: backend.data.resources.cfnResources.cfnGraphqlApi
//         .attrGraphQlEndpointArn,
//       roleArn: eventBusRole.roleArn,
//       appSyncParameters: {
//         graphQlOperation: publishOrderFromEventBridge,
//       },
//       inputTransformer: {
//         inputPathsMap: {
//           orderId: "$.detail.orderId",
//           status: "$.detail.status",
//           message: "$.detail.message",
//         },
//         inputTemplate: JSON.stringify({
//           orderId: "<orderId>",
//           status: "<status>",
//           message: "<message>",
//         }),
//       },
//     },
//   ],
// });
