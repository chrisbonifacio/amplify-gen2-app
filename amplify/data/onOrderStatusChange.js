export function request(ctx) {
  return {
    payload: ctx.arguments,
  };
}

export function response(ctx) {
  if (ctx.error) {
    util.error(ctx.error.message, ctx.error.type, ctx.result);
  } else {
    return ctx.result;
  }
}