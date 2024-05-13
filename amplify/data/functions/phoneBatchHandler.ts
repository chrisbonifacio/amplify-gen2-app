import { Context, util } from "@aws-appsync/utils"; //

export const request = (ctx: Context) => {
  const { phoneNumbers } = ctx.args;

  return {
    operation: "BatchGetItem",
    tables: {
      User: [util.dynamodb.toMapValues({ phoneNumbers })],
    },
  };
};

export const response = (ctx: Context) => {
  return ctx.result;
};
