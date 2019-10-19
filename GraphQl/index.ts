import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const { graphql, buildSchema } = require("graphql");
import axios = require("axios");
import { AccountApi } from './lib/appcenter'

const token = "7852f12cf496422b78dfa1524851280ae80b0172";
const appName = "";
const orgName = "";

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
  const query = request.body.query;

  context.log(`GraphQL request: ${query}`);

  await graphql(schema, query, root).then(async response => {
    await context.log(`GraphQL response: ${response}`);
    context.res = {
      body: response
    };
    context.done();
  });
};

export default httpTrigger;



/*


const schema = buildSchema(`
    type Account {
      avatar_url: String
      display_name: String
      email: String
      name: String
      permissions: String[]
    }
    type App {
      owner: String
      app: String
    }
    type Configuration {
      trigger: String
      testsEnabled: Boolean
      badgeIsEnabled: String
      signed: Boolean
      cloneFromBranch: String
    }
    type Query {
        build(configuration: ID): Configuration
        account(token: ID): Account
    }
`);

*/