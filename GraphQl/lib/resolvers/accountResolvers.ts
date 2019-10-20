import { AccountApi } from "../appcenter";

const AccountResolvers = {
  async account(obj, args, context) {
    const response = await AccountApi.getAccount(context.token);
    return response;
  },
  async organizations(obj, args, context) {
    const response = await AccountApi.getOrganizations(context.token);
    return response;
  },
  async apps(obj, args, context) {
    const response = await AccountApi.getApps(context.token, obj.owner);
    return response;
  },
  async app(obj, args, context) {
    const response = await AccountApi.getApp(context.token, obj.owner, obj.app);
    return response;
  }
};

export default { AccountResolvers };