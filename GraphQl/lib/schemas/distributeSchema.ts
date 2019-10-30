const Queries = `
distribute(owner: String! app: String!): Distribute
releases(owner: String! app: String!): [Release]
release(owner: String! app: String!, id: ID): Release
distributionGroups(owner: String! app: String!): [DistributionGroup]
distributionGroup(owner: String! app: String! name: String!): DistributionGroup
distributionGroupMembers(owner: String! app: String! name: String!): [Account]
distributionGroupReleases(owner: String! app: String! name: String!): [Release]
`;

const Types = `
type Distribute {
  releases: [Release]
  distribution_groups: [DistributionGroup]
}
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
  build: SourceBuild
  destinations: [Destination]
}
type SourceBuild {
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
  members: [Account]
}
`;

export default { Queries, Types };