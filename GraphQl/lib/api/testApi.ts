const snakeCaseKeys = require("snakecase-keys");
import { BuildRequestOptions } from "./utils";
const request = require("request-promise");

export default class DistributeApi {
  static async getTest(token: String, owner: String, app: String) {
    return {
      params: {
        owner: owner,
        app: app
      }
    };
  }

  static async getTestRuns(token: String, owner: String, app: String) {
    var options = BuildRequestOptions(token, `/apps/${owner}/${app}/test_runs`);
    let response = await request(options);
    var releases = snakeCaseKeys(JSON.parse(response));
    return releases;
  }
}