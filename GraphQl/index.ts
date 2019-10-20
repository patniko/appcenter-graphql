import { AzureFunction, Context, HttpRequest } from "@azure/functions"
//const { graphql, buildSchema } = require("graphql");
const { gql, ApolloServer } = require("apollo-server-azure-functions");
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
  TestSchema,
  AccountApi
} from "./lib/appcenter";
import { TokenFromContext } from "./lib/resolvers/utils";

require('dotenv').config();

let token = "";
const resolvers = {
  Account: { ...AccountResolvers.Account },
  Query: {
    ...AccountResolvers.Query ,
  /*,
  ...AnalyticsResolvers,
  ...BuildResolvers,
  ...DiagnosticsResolvers,
  ...DistributeResolvers,
  ...TestResolvers,*/
  }
};
const typeDefs = gql`
  ${AccountSchema.Types}

  type Query {
    hello: String
    ${AccountSchema.Queries}
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ request }) => {

    const headerToken = request.headers["X-API-Token"];
    token = headerToken || process.env.APPCENTER_TOKEN;

    // add the user to the context
    return { token };
  }
});
module.exports = server.createHandler({
  cors: {
    origin: '*',
    credentials: false,
  },
});


const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void> {

  const headerToken = request.headers["X-API-Token"];
  token = headerToken || process.env.APPCENTER_TOKEN;

  const query = request.body.query;
  await context.log(`GraphQL request: ${query}`);

  const server = new ApolloServer({ typeDefs, resolvers }).createHandler({
    cors: {
      origin: '*',
      credentials: false,
    },
  });
  server(context, request);

  /*await graphql(schema, query, root).then(async response => {
    await context.log(`GraphQL response: ${response}`);
    context.res = {
      body: response
    };
    context.done();
  });*/
};

export default httpTrigger;
