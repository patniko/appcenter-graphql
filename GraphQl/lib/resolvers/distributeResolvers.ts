import { DistributeApi } from "../appcenter";
import { Normalize, TokenFromContext } from "./utils";

const DistributeResolvers = {
  Query: {
    async distribute(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistribute(token, args.owner, args.app);
      return Normalize(response);;
    },
    async releases(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getReleases(token, args.owner, args.app);
      return Normalize(response);;
    },
    async release(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getRelease(token, args.owner, args.app, args.id);
      return Normalize(response);;
    },
    async distributionGroups(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistributionGroups(token, args.owner, args.app);
      return Normalize(response);;
    },
    async distributionGroup(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistributionGroup(token, args.owner, args.app, args.name);
      return Normalize(response);;
    },
    async distributionGroupMembers(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistributionGroupMembers(token, args.owner, args.app, args.name);
      return Normalize(response);;
    },
    async distributionGroupReleases(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DistributeApi.getDistributionGroupReleases(token, args.owner, args.app, args.name);
      return Normalize(response);;
    },
  },
  Distribute: {
    async releases(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await DistributeApi.getReleases(token, owner, app);
      return Normalize(response);;
    },
    async distribution_groups(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await DistributeApi.getDistributionGroups(token, owner, app);
      return Normalize(response);;
    }
  },
  DistributionGroup: {
    async members(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app, distribution_group} = obj.params;
      const response = await DistributeApi.getDistributionGroupMembers(token, owner, app, distribution_group);
      return Normalize(response);;
    },
  }
};

export default DistributeResolvers;