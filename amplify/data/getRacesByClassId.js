import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { classId } = ctx.args;

  return ddb.query({
    query: {
      pk: `class-${classId}`,
      sk: "results",
    },
  });
}

export function response(ctx) {
  return ctx.result;
}
