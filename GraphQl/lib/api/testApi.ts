const request = require('request-promise');
export default class TestApi {

    static getBuildConfiguration(branch, token, owner, app) {
        const endpoint = `/branches/${branch}/config`;
        var options = BuildUrl(endpoint, token, owner, app);
        return request(options);
    }

    static deletePrBuildConfiguration(branch, token, owner, app) {
        const options = BuildUrl(`/branches/${branch}/config`, token, owner, app);
        Object.assign(options, { method: 'DELETE' });
        return request(options);
    }
};

function BuildUrl(endpoint, token, owner, app) {
    const options = {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'X-API-Token': token },
        url: `https://api.appcenter.ms/v0.1/apps/${owner}/${app}${endpoint}`
    };
    return options;
}