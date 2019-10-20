export function BuildRequestOptions(token: String, endpoint: String, owner: String = undefined, app: String = undefined) {
  const options = {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'X-API-Token': token },
      url: (owner && app) ? `https://api.appcenter.ms/v0.1/apps/${owner}/${app}${endpoint}` : `https://api.appcenter.ms/v0.1${endpoint}`
  };
  return options;
}
