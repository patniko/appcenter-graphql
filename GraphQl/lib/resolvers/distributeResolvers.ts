import { DistributeApi } from "../appcenter";

const DistributeResolvers = {
  async releases(obj, args, context) {
    const response = await DistributeApi.getReleases(context.token, obj.owner, obj.app);
    return response;
  },
  async release(obj, args, context) {
    const response = await DistributeApi.getRelease(context.token, obj.owner, obj.app, obj.id);
    return response;
  },
  async distributionGroups(obj, args, context) {
    const response = await DistributeApi.getDistributionGroups(context.token, obj.owner, obj.app);
    return response;
  },
  async distributionGroup(obj, args, context) {
    const response = await DistributeApi.getDistributionGroup(context.token, obj.owner, obj.app, obj.name);
    return response;
  },
  async distributionGroupTesters(obj, args, context) {
    const response = await DistributeApi.getDistributionGroupTesters(context.token, obj.owner, obj.app, obj.name);
    return response;
  },
  async distributionGroupReleases(obj, args, context) {
    const response = await DistributeApi.getDistributionGroupReleases(context.token, obj.owner, obj.app, obj.name);
    return response;
  },
};

export default { DistributeResolvers };