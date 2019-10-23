import { DiagnosticsApi } from "../appcenter";
import { Normalize, TokenFromContext } from "./utils";

const DiagnosticsResolvers = {
  Query: {
    async diagnotics(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await DiagnosticsApi.getDiagnostics(token, args.owner, args.app, args.end_date, args.days_ago);
      return Normalize(response);
    },
  },
  Diagnostics: {
    async errors(obj, args, context, info) {
      const token = TokenFromContext(context);
      let {owner, app, end_date, days_ago} = obj.params;
      const response = await DiagnosticsApi.getErrors(token, owner, app, end_date, days_ago);
      return Normalize(response);;
    }
  }
};

export default DiagnosticsResolvers;