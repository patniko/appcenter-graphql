const Queries = `
releases(owner: String! app: String!): [Release]
release(owner: String! app: String!, id: ID): Release
distributionGroups(owner: String! app: String!): [DistributionGroup]
distributionGroup(owner: String! app: String! name: String!): DistributionGroup
distributionGroupTesters(owner: String! app: String! name: String!): [DistributionGroupTester]
distributionGroupReleases(owner: String! app: String! name: String!): [DistributionGroupTester]
`;

const Types = `
type Release {
  id: ID
  app_name: String
  app_display_name: String
  short_version: String
  version: String
  uploaded_at: String
  enabled: Boolean
  release_notes: String
  provisioning_profile_name: String
  provisioning_profile_type: String
  min_os: String
  device_family: String
  bundle_identifier: String
  download_url: String
  app_icon_url: String

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

type DistributionGroup {
  id: ID
  name: String
  is_public: Boolean
}

type DistributionGroupTester {
  id: ID
  avatar_url: String
  display_name: String
  email: String
  invite_pending: Boolean
  name: String
}
`;

export default { Queries, Types };