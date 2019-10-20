import { DistributeApi } from "../appcenter";
import { TokenFromContext } from "./utils";

const DistributeResolvers = {
  async releases(obj, args, context) {
    const token = TokenFromContext(context);
    const response = await DistributeApi.getReleases(token, obj.owner, obj.app);
    return response;
  },
  async release(obj, args, context) {
    const token = TokenFromContext(context);
    const response = await DistributeApi.getRelease(token, obj.owner, obj.app, obj.id);
    return response;
  },
  async distributionGroups(obj, args, context) {
    const token = TokenFromContext(context);
    const response = await DistributeApi.getDistributionGroups(token, obj.owner, obj.app);
    return response;
  },
  async distributionGroup(obj, args, context) {
    const token = TokenFromContext(context);
    const response = await DistributeApi.getDistributionGroup(token, obj.owner, obj.app, obj.name);
    return response;
  },
  async distributionGroupTesters(obj, args, context) {
    const token = TokenFromContext(context);
    const response = await DistributeApi.getDistributionGroupTesters(token, obj.owner, obj.app, obj.name);
    return response;
  },
  async distributionGroupReleases(obj, args, context) {
    const token = TokenFromContext(context);
    const response = await DistributeApi.getDistributionGroupReleases(token, obj.owner, obj.app, obj.name);
    return response;
  },
};

export default DistributeResolvers;