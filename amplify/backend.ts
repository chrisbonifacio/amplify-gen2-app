import { defineBackend, defineFunction } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { storage } from "./storage/resource";
import { SecurityGroup, SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

const getSecretFunction = defineFunction({
  entry: "./functions/handler.ts",
  name: "FunctionInAmplifyVpc",
});

import { Stack } from "aws-cdk-lib";

const backend = defineBackend({
  auth,
  data,
  storage,
  getSecretFunction,
});

const dataStack = Stack.of(backend.data);

const noneDs = backend.data.addNoneDataSource("NoneDataSource");

const httpDs = backend.data.addHttpDataSource(
  "HttpDataSource",
  "https://example.com/api"
);

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

backend.getSecretFunction.resources.lambda.addToRolePolicy(
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

backend.getSecretFunction.resources.cfnResources.cfnFunction.vpcConfig = {
  subnetIds,
  securityGroupIds: [securityGroup.securityGroupId],
};
