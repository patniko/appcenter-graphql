import { BuildRequestOptions } from "./utils";
const request = require("request-promise");

export default class BuildApi {
  static async getBuild(token: String, owner: String, app: String) {
    return {
      params: {
        owner: owner,
        app: app
      }
    };
  }

  static async getRepos(token: String, owner, app) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/repo_config`);
    let response = await request(options);
    return JSON.parse(response);
  }

  static async getBranches(token: String, owner, app) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/branches`);
    let response = await request(options);
    return JSON.parse(response);
  }

  static async getBranchConfig(branch, token, owner, app) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/branches/${branch}/config`);
    let response = await request(options);
    return JSON.parse(response);
  }
}
