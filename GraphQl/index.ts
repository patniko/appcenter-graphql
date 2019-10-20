import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const { graphql, buildSchema } = require("graphql");
import {
  AccountResolvers,
  AccountSchema,
  AnalyticsResolvers,
  AnalyticsSchema,
  BuildSchema,
  BuildResolvers,
  DiagnosticsResolvers,
  DiagnosticsSchema,
  DistributeResolvers,
  DistributeSchema,
  TestResolvers,
  TestSchema
} from './lib/appcenter'
import buildResolvers from "./lib/resolvers/buildResolvers";

require('dotenv').config();

const schema = buildSchema(`
    ${AccountSchema.Types}
    ${AnalyticsSchema.Types}
    ${BuildSchema.Types}
    ${DiagnosticsSchema.Types}
    ${DistributeSchema.Types}
    ${TestSchema.Types}

    type Query {
      ${AccountSchema.Queries}
      ${AnalyticsSchema.Queries}
      ${BuildSchema.Queries}
      ${DiagnosticsSchema.Queries}
      ${DistributeSchema.Queries}
      ${TestSchema.Queries}
    }
`);

let token = "";
const root = {
  token,
  ...AccountResolvers,
  ...AnalyticsResolvers,
  ...BuildResolvers,
  ...DiagnosticsResolvers,
  ...DistributeResolvers,
  ...TestResolvers,
};

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void> {

  const headerToken = request.headers["X-API-Token"];
  root.token = headerToken || process.env.APPCENTER_TOKEN;

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
