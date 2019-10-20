import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const { graphql, buildSchema } = require("graphql");
import {
  AccountSchema,
  AccountApi,
  DistributeSchema,
  DistributeApi
} from './lib/appcenter'

require('dotenv').config();
let token = "";

const schema = buildSchema(`
    ${AccountSchema.Types}
    ${DistributeSchema.Types}

    type Query {
      ${AccountSchema.Queries}
      ${DistributeSchema.Queries}
    }
`);

const account = {
  async account(obj, args, context) {
    const account = await AccountApi.getAccount(token);
    return account;
  },
  async organizations(obj, args, context) {
    const account = await AccountApi.getOrganizations(token);
    return account;
  },
  async apps(obj, args, context) {
    const account = await AccountApi.getApps(token, obj.owner);
    return account;
  },
  async app(obj, args, context) {
    const account = await AccountApi.getApp(token, obj.owner, obj.app);
    return account;
  }
};

const distribute = {
  async releases(obj, args, context) {
    const account = await DistributeApi.getReleases(token, obj.owner, obj.app);
    return account;
  },
};

const root = {
  account,
  distribute
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
