import { BuildApi } from "../appcenter";
import { Normalize, TokenFromContext } from "./utils";

const BuildResolvers = {
  Query: {
    async build(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await BuildApi.getBuild(token, args.owner, args.app);
      return Normalize(response);
    },
    /*async branchConfig(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await BuildApi.getBuild(token, args.owner, args.app);
      return response;
    },*/
  },
  Build: {
    async repos(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await BuildApi.getRepos(token, owner, app);
      return Normalize(response);
    },
    /*async branches(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await BuildApi.getBranches(token, owner, app);
      var branches = JSON.parse(response).map(branch => {
        if (branch.last_build) {
          Object.assign(branch, branch.last_build);
        }
      });
      return branches;
    }*/
  },
};

export default BuildResolvers;