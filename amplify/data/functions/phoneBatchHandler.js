import { util } from "@aws-appsync/utils";

export const request = (ctx) => {
  const userIds = [];

  ctx.args.userIds.forEach((userId) => {
    userIds.push(util.dynamodb.toMapValues({ id: userId }));
  });

  return {
    operation: "BatchGetItem",
    tables: {
      [ctx.env.USER_TABLE]: {
        keys: userIds,
      },
    },
  };
};

export const response = (ctx) => {
  return ctx.result.data[ctx.env.USER_TABLE];
};
