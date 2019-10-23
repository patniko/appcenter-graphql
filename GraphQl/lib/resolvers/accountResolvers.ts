import { AccountApi, AnalyticsApi, DistributeApi, TestApi, BuildApi } from "../appcenter";
import { Normalize, TokenFromContext } from "./utils";

const AccountResolvers = {
  Query: {
    async account(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getAccount(token);
      return Normalize(response);;
    },
    async organizations(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getOrganizations(token);
      return Normalize(response);;
    },
    async apps(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getApps(token, args.owner);
      return Normalize(response);;
    },

    async app(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getApp(token, args.owner, args.app);
      return Normalize(response);;
    }
  },
  Account: {
    async organizations(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getOrganizations(token);
      return Normalize(response);;
    },
    async apps(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getApps(token);
      return Normalize(response);;
    },
  },
  App: {
    async analytics(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await AnalyticsApi.getAnalytics(token, owner, app);
      return Normalize(response);;
    },
    async distribute(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await DistributeApi.getDistribute(token, owner, app);
      return Normalize(response);;
    },
    async test(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await TestApi.getTest(token, owner, app);
      return Normalize(response);;
    },
    async build(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await BuildApi.getBuild(token, owner, app);
      return Normalize(response);;
    },
  },
};

export default AccountResolvers;