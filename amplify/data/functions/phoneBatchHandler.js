import { util } from "@aws-appsync/utils"; //

export const request = (ctx) => {
  const { phoneNumbers } = ctx.args;

  return {
    operation: "BatchGetItem",
    tables: {
      User: [util.dynamodb.toMapValues({ phoneNumbers })],
    },
  };
};

export const response = (ctx) => {
  return ctx.result;
};
