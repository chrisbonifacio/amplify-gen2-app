import { defineBackend, defineFunction } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { Stack } from "aws-cdk-lib";
import { SecurityGroup, SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";
import {
  Effect,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";

const myFunction = defineFunction({
  entry: "./functions/handler.ts",
  name: "FunctionInAmplifyVpc",
});

const backend = defineBackend({
  auth,
  data,
  myFunction,
});

const securityStack = new Stack(Stack.of(backend.data), "NewStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

const vpc = Vpc.fromLookup(securityStack, "DefaultVpc", {
  isDefault: true,
});

const securityGroup = SecurityGroup.fromLookupByName(
  securityStack,
  "DefaultSecurityGroup",
  "default",
  vpc
);

const subnetIds = vpc.selectSubnets({
  subnetType: SubnetType.PUBLIC,
}).subnetIds;

backend.myFunction.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    effect: Effect.ALLOW,
    actions: [
      "ec2:CreateNetworkInterface",
      "ec2:DeleteNetworkInterface",
      "ec2:DescribeNetworkInterfaces",
    ],
    resources: ["*"],
  })
);

backend.myFunction.resources.cfnResources.cfnFunction.vpcConfig = {
  subnetIds,
  securityGroupIds: [securityGroup.securityGroupId],
};
