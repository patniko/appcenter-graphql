const request = require('request-promise');
export default class DistributeApi {

    static async getReleases(token, owner, app) {
        var options = BuildUrl(token, `/apps/${owner}/${app}/releases`);
        let response = await request(options);
        var releases = JSON.parse(response).map(release => {
            if(release.build)
            {
                release.build.branch_name = release.build.branchName;
                release.build.commit_hash = release.build.commitHash;
                release.build.commitMessage = release.build.commentMessage;
            }
            return release;
          });
          return releases;
    }

};

function BuildUrl(token, endpoint) {
    const options = {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'X-API-Token': token },
        url: `https://api.appcenter.ms/v0.1${endpoint}`
    };
    return options;
}