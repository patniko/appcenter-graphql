import { BuildApi } from "../appcenter";
import { Normalize, TokenFromContext } from "./utils";

const BuildResolvers = {
  Query: {
    async build(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await BuildApi.getBuild(token, args.owner, args.app);
      return Normalize(response);
    },
    async branchConfig(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await BuildApi.getBranchConfig(token, args.owner, args.app, args.name);
      return Normalize(response);
    },
  },
  Build: {
    async repos(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await BuildApi.getRepos(token, owner, app);
      return Normalize(response);
    },
    async branches(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await BuildApi.getBranches(token, owner, app);
      var branches = response.map(branch => {
        branch = branch.branch;
        if (branch.last_build) {
          Object.assign(branch, branch.last_build);
        }
        if (branch.commit) {
          branch.sha = branch.commit.sha;
        }
        return branch;
      });
      return Normalize(branches);
    }
  },
  Branch: {
    async config(obj, args, context) {
      return {};
      /*const token = TokenFromContext(context);
      let {owner, app, name} = obj.params;
      const response = await BuildApi.getBranchConfig(token, owner, app, name);
      return Normalize(response);*/
    }
  },
};

export default BuildResolvers;