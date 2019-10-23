import { BuildRequestOptions, GetStartDate } from "./utils";
import request = require("request-promise");

export default class AnalyticsApi {
  static async getAnalytics(token: String, owner: String, app: String, end_date: Date = new Date(), days_ago: number = 30) {
    const analytics = {
      params: {
        owner: owner,
        app: app,
        end_date: end_date,
        days_ago: days_ago
      }
    };
    return analytics;
  }

  static async getDeviceCounts(token: String, owner: String, app: String, end_date: Date = new Date(), days_ago: number = 30) {
    var options = BuildRequestOptions(token, `/analytics/active_device_counts?start=${GetStartDate(end_date, days_ago)}&end=${end_date.toISOString()}`, owner, app);
    let response = await request(options);
    return JSON.parse(response);
  }

  static async getOses(token: String, owner: String, app: String, end_date: Date, days_ago: number = 30) {
    var options = BuildRequestOptions(token, `/analytics/oses?start=${GetStartDate(end_date, days_ago)}&end=${end_date.toISOString()}`, owner, app);
    let response = await request(options);
    return JSON.parse(response).oses;
  }

  static async getModels(token: String, owner: String, app: String, end_date: Date, days_ago: number = 30) {
    var options = BuildRequestOptions(token, `/analytics/models?start=${GetStartDate(end_date, days_ago)}&end=${end_date.toISOString()}`, owner, app);
    let response = await request(options);
    return JSON.parse(response).models;
  }

  static async getLanguages(token: String, owner: String, app: String, end_date: Date, days_ago: number = 30) {
    var options = BuildRequestOptions(token, `/analytics/languages?start=${GetStartDate(end_date, days_ago)}&end=${end_date.toISOString()}`, owner, app);
    let response = await request(options);
    return JSON.parse(response).languages;
  }

  static async getPlaces(token: String, owner: String, app: String, end_date: Date, days_ago: number = 30) {
    var options = BuildRequestOptions(token, `/analytics/places?start=${GetStartDate(end_date, days_ago)}&end=${end_date.toISOString()}`, owner, app);
    let response = await request(options);
    return JSON.parse(response).places;
  }
}
