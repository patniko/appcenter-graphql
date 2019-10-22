const request = require("request-promise");
export default class DiagnosticsApi {
  static async getErrorGroupseleases(token, owner, app) {
    var options = BuildUrl(token, `/apps/${owner}/${app}/releases`);
    let response = await request(options);
    var releases = JSON.parse(response).map(release => {
      if (release.build) {
        release.build.branch_name = release.build.branchName;
        release.build.commit_hash = release.build.commitHash;
        release.build.commitMessage = release.build.commentMessage;
      }
      return release;
    });
    return releases;
  }
}

//curl -X GET "https://api.appcenter.ms/v0.1/apps/appcenter/HockeyApp-Android-Production/errors/errorGroups
//?start=2019-08-01&%24orderby=count%20desc&%24top=30" -H "accept: application/json" -H
//"X-API-Token: 7852f12cf496422b78dfa1524851280ae80b0172"

function BuildUrl(token, endpoint) {
  const options = {
    headers: { Accept: "application/json", "Content-Type": "application/json", "X-API-Token": token },
    url: `https://api.appcenter.ms/v0.1${endpoint}`
  };
  return options;
}
