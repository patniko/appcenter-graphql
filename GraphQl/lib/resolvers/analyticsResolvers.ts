import { AnalyticsApi } from "../appcenter";
import { TokenFromContext } from "./utils";

const AnalyticsResolvers = {
  Query: {
    async analytics(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AnalyticsApi.getAnalytics(token, args.owner, args.app, args.end_date, args.days_ago);
      return response;
    },
  },
  Analytics: {
    async users(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AnalyticsApi.getDeviceCounts(token, args.owner, args.app, args.end_date, args.days_ago);
      return response;
    },
    async places(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AnalyticsApi.getPlaces(token, args.owner, args.app, args.end_date, args.days_ago);
      return response;
    },
    async oses(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AnalyticsApi.getOses(token, args.owner, args.app, args.end_date, args.days_ago);
      return response;
    },
    async models(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AnalyticsApi.getModels(token, args.owner, args.app, args.end_date, args.days_ago);
      return response;
    },
    async languages(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AnalyticsApi.getLanguages(token, args.owner, args.app, args.end_date, args.days_ago);
      return response;
    },
  }
};

export default AnalyticsResolvers;
