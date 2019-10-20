export function TokenFromContext(context) {
  return (context && context.token) ? context.token : "";
}