import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const { graphql, buildSchema } = require("graphql");
import axios = require("axios");

import { AppCenterBuild } from './lib/appcenter'

const schema = buildSchema(`
    type App {
      owner: String
      app: String
    }

    type Configuration {
      trigger: String
      testsEnabled: Boolean
      badgeIsEnabled: String
      signed: Boolean
      cloneFromBranch: String
    }
    type Query {
        build(configuration: ID): Configuration
    }
`);


const root = {
  build(obj, args, context) {
    return AppCenterBuild.getBuildConfiguration("master", "", obj.appName, obj.appName);
    return axios
      .post(`${baseUrl}/api/recipe`, {
        name: obj.name,
        args,
        context
      })
      .then(res => res.data);*/
      return { name: 343,
      publisher: "adfasdf",
      sourceUrl: "asdf",
      imageUrl: "asdfadf",
      ingredients: [] };
  },
  ingredient(obj, args, context) {
    return "HELLO"
    /*return axios
      .post(`${baseUrl}/api/ingredient`, { name: obj.name, context })
      .then(res => res.data);*/
  }
};

const httpTrigger: AzureFunction = async function (context: Context, request: HttpRequest): Promise<void> {
  const query = request.body.query;

  context.log(`GraphQL request: ${query}`);

  graphql(schema, query, root).then(response => {
    context.res = {
      body: response
    };
    context.done();
  });
};

export default httpTrigger;
