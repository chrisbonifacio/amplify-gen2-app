import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { Stack, aws_events } from "aws-cdk-lib";
import { aws_iam } from "aws-cdk-lib";
import { publishOrderFromEventBridge } from "./data/graphql/mutations";

export const backend = defineBackend({
  auth,
  data,
});

backend.data.resources.cfnResources.cfnGraphqlApi.environmentVariables = {
  USER_TABLE: "User-okmzm4g5l5d7jmkkn3kw5rqy2e-NONE",
};

const apiStack = Stack.of(backend.data);

const cloudWatchLogsRole = new aws_iam.Role(
  apiStack,
  "MyLibraryCloudWatchRole2",
  {
    roleName: "MyLibraryCloudWatchRole2",
    assumedBy: new aws_iam.ServicePrincipal("appsync.amazonaws.com"),
    managedPolicies: [
      aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
        "service-role/AWSAppSyncPushToCloudWatchLogs"
      ),
    ],
  }
);

backend.data.resources.cfnResources.cfnGraphqlApi.logConfig = {
  cloudWatchLogsRoleArn: cloudWatchLogsRole.roleArn,
  fieldLogLevel: "ALL",
  excludeVerboseContent: false,
};
