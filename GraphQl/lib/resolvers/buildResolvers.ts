import { BuildApi } from "../appcenter";

const BuildResolvers = {
  /*async releases(obj, args, context) {
    const response = await DistributeApi.getReleases(context.token, obj.owner, obj.app);
    return response;
  },
  async release(obj, args, context) {
    const response = await DistributeApi.getRelease(context.token, obj.owner, obj.app, obj.id);
    return response;
  },*/
};

export default BuildResolvers;