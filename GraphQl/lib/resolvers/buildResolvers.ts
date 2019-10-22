import { BuildApi } from "../appcenter";
import { TokenFromContext } from "./utils";

const BuildResolvers = {
  Query: {
    async build(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await BuildApi.getBuild(token, args.owner, args.app);
      return response;
    },
    async branches(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await BuildApi.getBranches(token, args.owner, args.app);
      var branches = JSON.parse(response).map(branch => {
        if (branch.last_build) {
          Object.assign(branch, branch.last_build);
        }
      });
      return branches;
    },
    async branchConfig(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await BuildApi.getBuild(token, args.owner, args.app);
      return response;
    },
  },
  Build: {
    async branches(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await BuildApi.getBranches(token, owner, app);
      return response;
    },
  },
};

export default BuildResolvers;