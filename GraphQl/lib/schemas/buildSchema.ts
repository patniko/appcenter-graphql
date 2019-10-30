const Queries = `
build(owner: String! app: String!): Build
branchConfig(owner: String! app: String! name: String!): BranchConfig
`;

const Types = `
type Build {
  repos: [Repo]
  branches: [Branch]
}
type Repo {
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
type Branch {
  id: ID
  name: String
  sha: String
  configured: Boolean
  build_number: String
  queue_time: String
  start_time: String
  finish_time: String
  last_changed_date: String
  status: String
  result: String
  source_branch: String
  source_version: String
  config: BranchConfig
}
type BranchConfig {
  trigger: String
  tests_enabled: Boolean
  badge_is_enabled: Boolean
  signed: Boolean
  javascript: Javascript
  android: Android
  xamarin: Xamarin
  xcode: Xcode
}
type Javascript {
  package_json_path: String
  run_tests: Boolean
  react_native_version: String
}
type Xamarin {
  sln_path: String
  is_sim_build: Build
  args: String
  configuration: String
  p12_file: String
  p12_pwd: String
  prov_profile: String
  mono_version: String
  sdk_bundle: String
  symlink: String
}
type Android {
  gradle_wrapper_path: String
  module: String
  build_variant: String
  run_tests: Boolean
  run_lint: Boolean
  is_root: Boolean
  automatic_signing: Boolean
  keystore_password: String
  key_alias: String
  key_password: String
  keystore_filename: String
  keystore_encoded: String
}
type Xcode {
  project_or_workspace_path: String
  podfile_path: String
  cartfile_path: String
  provisioning_profile_encoded: String
  certificate_encoded: String
  provisioning_profile_file_id: String
  certificate_file_id: String
  provisioning_profile_upload_id: String
  certificate_upload_id: String
  certificate_password: String
  scheme: String
  xcode_version: String
  provisionin_profile_filename: String
  certificate_filename: String
  team_id: String
  automatic_signing: Boolean
  xcode_project_sha: String
  archive_configuration: String
  target_to_archive: String
  force_legacy_build_system: Boolean
}
`;

export default { Queries, Types };
