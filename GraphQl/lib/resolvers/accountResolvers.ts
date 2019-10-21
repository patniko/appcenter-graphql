import { AccountApi, AnalyticsApi, DistributeApi } from "../appcenter";
import { TokenFromContext } from "./utils";

const AccountResolvers = {
  Query: {
    async account(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getAccount(token);
      return response;
    },
    async organizations(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getOrganizations(token);
      return response;
    },
    async apps(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getApps(token, args.owner);
      return response;
    },

    async app(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getApp(token, args.owner, args.app);
      return response;
    }
  },
  Account: {
    async organizations(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getOrganizations(token);
      return response;
    },
    async apps(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getApps(token);
      return response;
    },
  },
  App: {
    async analytics(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AnalyticsApi.getAnalytics(token, args.owner, args.app);
      return response;
    },
    async releases(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getReleases(token, args.owner, args.app);
      return response;
    },
  }
};

export default AccountResolvers;