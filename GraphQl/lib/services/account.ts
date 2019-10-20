const request = require('request-promise');
export default class AccountApi {

    static async getAccount(token) {
        var options = BuildUrl(token, "/user");
        let response = await request(options);
        return JSON.parse(response);
    }

    static async getOrganizations(token) {
        var options = BuildUrl(token, "/orgs");
        let response = await request(options);
        return JSON.parse(response);
    }

    static async getApps(token, org = undefined) {
        var options = BuildUrl(token, org ? `/orgs/${org}/apps` : "/apps");
        let response = await request(options);
        return JSON.parse(response);
    }

    static async getApp(token, owner, app) {
        var options = BuildUrl(token, `/apps/${owner}/${app}`);
        let response = await request(options);
        return JSON.parse(response);
    }
};

function BuildUrl(token, endpoint) {
    const options = {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'X-API-Token': token },
        url: `https://api.appcenter.ms/v0.1${endpoint}`
    };
    return options;
}
