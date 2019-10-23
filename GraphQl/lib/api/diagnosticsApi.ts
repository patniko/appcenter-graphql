import { BuildRequestOptions, GetStartDate } from "./utils";
const request = require("request-promise");

export default class DiagnosticsApi {
  static async getDiagnostics(token: String, owner: String, app: String, end_date: Date = new Date(), days_ago: number = 30) {
    const diagnostics = {
      params: {
        owner: owner,
        app: app,
        end_date: end_date,
        days_ago: days_ago
      }
    };
    return diagnostics;
  }

  static async getErrors(token: String, owner: String, app: String, end_date: Date = new Date(), days_ago: number = 30) {
    var options = BuildRequestOptions(token, `/errors/errorGroups?version=&app_build=&groupState=&start=${GetStartDate(end_date, days_ago)}&errorType=unhandlederror&$orderby=lastError%20desc&$top=100`, owner, app);
    let response = await request(options);
    return JSON.parse(response);
  }
}
