const Queries = `
repoConfigs(owner: String! app: String!): [RepoConfig]
`;

const Types = `
type RepoConfig {
  repo_url: String
  repo_id: String
  external_user_id: String
  service_connection_id: String
  installation_id: String
  id: String
  type: String
  state: String
  user_email: String
}
`;

export default { Queries, Types };

/*
Build
- list configs
- start build
- get config
*/