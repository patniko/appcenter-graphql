const snakeCaseKeys = require("snakecase-keys");

export function TokenFromContext(context) {
  return (context && context.token) ? context.token : "";
}

export function Normalize(response) {
  return snakeCaseKeys(response);
}