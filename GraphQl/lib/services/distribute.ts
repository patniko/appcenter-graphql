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

    static async getRelease(token, owner, app, id) {
        var options = BuildUrl(token, `/apps/${owner}/${app}/releases/${id}`);
        let response = await request(options);
        var release = JSON.parse(response);
        if(release.build)
        {
            release.build.branch_name = release.build.branchName;
            release.build.commit_hash = release.build.commitHash;
            release.build.commitMessage = release.build.commentMessage;
        }
        return release;
    }

    static async getDistributionGroups(token, owner, app) {
        var options = BuildUrl(token, `/apps/${owner}/${app}/distribution_groups`);
        let response = await request(options);
        return JSON.parse(response);
    }

    static async getDistributionGroup(token, owner, app, name) {
        var options = BuildUrl(token, `/apps/${owner}/${app}/distribution_groups/${name}`);
        let response = await request(options);
        return JSON.parse(response);
    }

    static async getDistributionGroupTesters(token, owner, app, name) {
        var options = BuildUrl(token, `/apps/${owner}/${app}/distribution_groups/${name}/members`);
        let response = await request(options);
        return JSON.parse(response);
    }

    static async getDistributionGroupReleases(token, owner, app, name) {
        var options = BuildUrl(token, `/apps/${owner}/${app}/distribution_groups/${name}/releases`);
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