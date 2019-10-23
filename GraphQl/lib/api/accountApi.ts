import { BuildRequestOptions } from "./utils";
import request = require("request-promise");

export default class AccountApi {
  static async getAccount(token: String) {
    var options = BuildRequestOptions(token, "/user");
    let response = await request(options);
    response = JSON.parse(response);
    return response;
  }

  static async getOrganizations(token: String) {
    var options = BuildRequestOptions(token, "/orgs");
    let response = await request(options);
    return JSON.parse(response);
  }

  static async getApps(token: String, org: String = undefined) {
    var options = BuildRequestOptions(token, org ? `/orgs/${org}/apps` : "/apps");
    let response = await request(options);
    return JSON.parse(response);
  }

  static async getApp(token: String, owner: String, app: String) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}`);
    let response = await request(options);
    response = JSON.parse(response);
    response.params = {
      owner: owner,
      app: app
    };
    return response;
  }
}
