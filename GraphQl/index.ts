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

require("dotenv").config();

const resolvers = {
  Account: AccountResolvers.Account,
  App: AccountResolvers.App,
  Analytics: AnalyticsResolvers.Analytics,
  Distribute: DistributeResolvers.Distribute,
  DistributionGroup: DistributeResolvers.DistributionGroup,
  Query: {
    ...AccountResolvers.Query,
    ...AnalyticsResolvers.Query,
    ...DistributeResolvers.Query
    /*,
  ...BuildResolvers,
  ...DiagnosticsResolvers,
  ...TestResolvers,*/
  }
};

const typeDefs = gql`
  ${AccountSchema.Types}
  ${AnalyticsSchema.Types}
  ${DistributeSchema.Types}

  type Query {
    ${AccountSchema.Queries}
    ${AnalyticsSchema.Queries}
    ${DistributeSchema.Queries}
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ request }) => {
    const headerToken = request.headers["X-API-Token"];
    const token = headerToken || process.env.APPCENTER_TOKEN;
    return { token };
  }
});
module.exports = server.createHandler({
  cors: {
    origin: "*",
    credentials: false
  }
});
