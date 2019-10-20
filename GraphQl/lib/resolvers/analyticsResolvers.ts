import { AnalyticsApi } from "../appcenter";
import { TokenFromContext } from "./utils";

const AnalyticsResolvers = {
  Query: {
    /*async analytics(obj, args, context) {
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
      const response = await AccountApi.getApps(token, obj.owner);
      return response;
    },

    async app(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getApp(token, obj.owner, obj.app);
      return response;
    }*/
  },
};

export default AnalyticsResolvers;
/*
Analytics
- active users
- sessions
- localization
*/