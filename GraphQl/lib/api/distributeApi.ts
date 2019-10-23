import { BuildRequestOptions } from "./utils";
const request = require("request-promise");

export default class DistributeApi {
  static async getDistribute(token: String, owner: String, app: String) {
    return {
      params: {
        owner: owner,
        app: app
      }
    };
  }

  static async getReleases(token: String, owner: String, app: String) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/releases`);
    let response = await request(options);
    var releases = JSON.parse(response);
    return releases;
  }

  static async getRelease(token: String, owner: String, app: String, id: String) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/releases/${id}`);
    let response = await request(options);
    var release = JSON.parse(response);
    return release;
  }

  static async getDistributionGroups(token: String, owner: String, app: String) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/distribution_groups`);
    let response = await request(options);
    return JSON.parse(response);
  }

  static async getDistributionGroup(token: String, owner: String, app: String, name: String) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/distribution_groups/${name}`);
    let response = await request(options);
    response = JSON.parse(response);
    response.params = {
      owner: owner,
      app: app
    };
    return response;
  }

  static async getDistributionGroupMembers(token: String, owner: String, app: String, name: String) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/distribution_groups/${name}/members`);
    let response = await request(options);
    return JSON.parse(response);
  }

  static async getDistributionGroupReleases(token: String, owner: String, app: String, name: String) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/distribution_groups/${name}/releases`);
    let response = await request(options);
    var releases = JSON.parse(response);
    return releases;
  }
}

