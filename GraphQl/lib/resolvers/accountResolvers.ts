import { AccountApi } from "../appcenter";
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
      const response = await AccountApi.getApps(token, obj.owner);
      return response;
    },

    async app(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AccountApi.getApp(token, obj.owner, obj.app);
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
};

export default AccountResolvers;