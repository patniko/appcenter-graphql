import { AccountApi, AnalyticsApi, DistributeApi, TestApi, BuildApi } from "../appcenter";
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
      let {owner, app} = obj.params;
      const response = await AnalyticsApi.getAnalytics(token, owner, app);
      return response;
    },
    async distribute(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await DistributeApi.getDistribute(token, owner, app);
      return response;
    },
    async test(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await TestApi.getTest(token, owner, app);
      return response;
    },
    async build(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await BuildApi.getBuild(token, owner, app);
      return response;
    },
  },
};

export default AccountResolvers;