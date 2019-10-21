import { DistributeApi } from "../appcenter";
import { TokenFromContext } from "./utils";

const DistributeResolvers = {
  Query: {
    async releases(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getReleases(token, args.owner, args.app);
      return response;
    },
    async release(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getRelease(token, args.owner, args.app, args.id);
      return response;
    },
    async distributionGroups(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistributionGroups(token, args.owner, args.app);
      return response;
    },
    async distributionGroup(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistributionGroup(token, args.owner, args.app, args.name);
      return response;
    },
    async distributionGroupTesters(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistributionGroupTesters(token, args.owner, args.app, args.name);
      return response;
    },
    async distributionGroupReleases(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistributionGroupReleases(token, args.owner, args.app, args.name);
      return response;
    },
  }
};

export default DistributeResolvers;