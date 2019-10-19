import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const { graphql, buildSchema } = require("graphql");
import { AccountApi } from './lib/appcenter'

require('dotenv').config();
let token = "";

const schema = buildSchema(`
    type Account {
      avatar_url: String
      display_name: String
      email: String
      name: String
      permissions: [String]
    }
    type Query {
        account(token: ID): Account
    }
`);


const root = {
  async account(obj, args, context) {
    const account = await AccountApi.getAccount(token);
    return account;
  }
};

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void> {

  const headerToken = request.headers["X-API-Token"];
  token = headerToken || process.env.APPCENTER_TOKEN;

  const query = request.body.query;
  await context.log(`GraphQL request: ${query}`);

  await graphql(schema, query, root).then(async response => {
    await context.log(`GraphQL response: ${response}`);
    context.res = {
      body: response
    };
    context.done();
  });
};

export default httpTrigger;
