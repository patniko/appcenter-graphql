const Queries = `
  account: Account
  organizations: [Organization]
  apps: [App]
  app(owner: String! app: String!): App
`;

const Types = `
  type Account {
    avatar_url: String
    display_name: String
    email: String
    name: String
    permissions: [String]
    organizations: [Organization]
    apps: [App]
  }
  type Organization {
    display_name: String
    name: String
  }
  type App {
    id: ID!
    app_secret: String!
    description: String
    display_name: String
    name: String
    os: String
    platform: String
    icon_url: String
    created_at: String
    updated_at: String
    release_type: String
    owner: Owner
    member_permissions: [String]
    analytics: [Analytics]
    releases: [Release]
  }
  type Owner {
    display_name: String
    email: String
    name: String!
    type: String
  }
`;

export default { Queries, Types };