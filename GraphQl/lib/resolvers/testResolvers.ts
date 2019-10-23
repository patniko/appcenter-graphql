import { TestApi } from "../appcenter";
import { Normalize, TokenFromContext } from "./utils";

const TestResolvers = {
  Query: {
    async test(obj, args, context) {
      const token = TokenFromContext(context);
      const response = await TestApi.getTest(token, args.owner, args.app);
      return Normalize(response);
    },
  },
  Test: {
    async test_runs(obj, args, context, info) {
      const token = TokenFromContext(context);
      let {owner, app} = obj.params;
      const response = await TestApi.getTestRuns(token, owner, app);
      return Normalize(response);
    },
  },
};

export default TestResolvers;
