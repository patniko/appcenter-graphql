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
  TestSchema
} from "./lib/appcenter";

require("dotenv").config();

const resolvers = {
  Account: AccountResolvers.Account,
  App: AccountResolvers.App,
  Analytics: AnalyticsResolvers.Analytics,
  Build: BuildResolvers.Build,
  Branch: BuildResolvers.Branch,
  Distribute: DistributeResolvers.Distribute,
  DistributionGroup: DistributeResolvers.DistributionGroup,
  Diagnostics: DiagnosticsResolvers.Diagnostics,
  Test: TestResolvers.Test,
  Query: {
    ...AccountResolvers.Query,
    ...AnalyticsResolvers.Query,
    ...BuildResolvers.Query,
    ...DiagnosticsResolvers.Query,
    ...DistributeResolvers.Query,
    ...TestResolvers.Query,
  }
};

const typeDefs = gql`
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
