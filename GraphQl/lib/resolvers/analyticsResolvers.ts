import { AnalyticsApi } from "../appcenter";
import { TokenFromContext, Normalize } from "./utils";

const AnalyticsResolvers = {
  Query: {
    async analytics(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await AnalyticsApi.getAnalytics(token, args.owner, args.app, args.end_date, args.days_ago);
      return Normalize(response);
    },
  },
  Analytics: {
    async devices(obj, args, context, info) {
      const token = TokenFromContext(context);
      let {owner, app, end_date, days_ago} = obj.params;
      const response = await AnalyticsApi.getDeviceCounts(token, owner, app, end_date, days_ago);
      return Normalize(response);
    },
    async places(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app, end_date, days_ago} = obj.params;
      const response = await AnalyticsApi.getPlaces(token, owner, app, end_date, days_ago);
      return Normalize(response);
    },
    async oses(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app, end_date, days_ago} = obj.params;
      const response = await AnalyticsApi.getOses(token, owner, app, end_date, days_ago);
      return Normalize(response);
    },
    async models(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app, end_date, days_ago} = obj.params;
      const response = await AnalyticsApi.getModels(token, owner, app, end_date, days_ago);
      return Normalize(response);
    },
    async languages(obj, args, context) {
      const token = TokenFromContext(context);
      let {owner, app, end_date, days_ago} = obj.params;
      const response = await AnalyticsApi.getLanguages(token, owner, app, end_date, days_ago);
      return Normalize(response);
    },
  }
};

export default AnalyticsResolvers;
