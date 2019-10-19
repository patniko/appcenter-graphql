const request = require('request-promise');
export default class AccountApi {

    static async getAccount(token) {
        var options = BuildUrl(token);
        let response = await request(options);
        return JSON.parse(response);
    }
};

function BuildUrl(token) {
    const options = {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'X-API-Token': token },
        url: `https://api.appcenter.ms/v0.1/user`
    };
    return options;
}
