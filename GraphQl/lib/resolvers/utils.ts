export function TokenFromContext(context) {
  return process.env.APPCENTER_TOKEN;
  //return (context && context.rootValue) ? context.rootValue.token : "";
}