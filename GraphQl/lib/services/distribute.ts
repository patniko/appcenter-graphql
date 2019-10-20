const request = require('request-promise');
export default class DistributeApi {

    static async getReleases(token, owner, app) {
        var options = BuildUrl(token, "/user");
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
