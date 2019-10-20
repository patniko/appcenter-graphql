const Queries = `
  releases(owner: String! app: String!): Release
`;

const Types = `
type Release {
  id: ID
  short_version: String
  version: String
  uploaded_at: String
  enabled: Boolean
  build: Build
  destinations: [Destination]
}

type Build {
  branch_name: String
  commit_hash: String
  commit_message: String
}

type Destination {
  id: ID
  name: String
  destination_type: String
}
`;

export default { Queries, Types };