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
  Build: BuildResolvers.Build,
  Distribute: DistributeResolvers.Distribute,
  DistributionGroup: DistributeResolvers.DistributionGroup,
  Test: TestResolvers.Test,
  Query: {
    ...AccountResolvers.Query,
    ...AnalyticsResolvers.Query,
    ...BuildResolvers.Query,
    ...DistributeResolvers.Query,
    ...TestResolvers.Query,
  }
};

const typeDefs = gql`
  ${AccountSchema.Types}
  ${AnalyticsSchema.Types}
  ${BuildSchema.Types}
  ${DistributeSchema.Types}
  ${TestSchema.Types}

  type Query {
    ${AccountSchema.Queries}
    ${AnalyticsSchema.Queries}
    ${BuildSchema.Queries}
    ${DistributeSchema.Queries}
    ${TestSchema.Queries}
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
