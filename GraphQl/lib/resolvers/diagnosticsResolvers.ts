import { DiagnosticsApi } from "../appcenter";

const DiagnosticsResolvers = {
  /*async releases(obj, args, context) {
    const response = await DistributeApi.getReleases(context.token, obj.owner, obj.app);
    return response;
  },
  async release(obj, args, context) {
    const response = await DistributeApi.getRelease(context.token, obj.owner, obj.app, obj.id);
    return response;
  },*/
};

export default { DiagnosticsResolvers };