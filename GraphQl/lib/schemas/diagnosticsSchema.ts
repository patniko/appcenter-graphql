const Queries = `
diagnostics(owner: String! app: String!): Diagnostics
`;

const Types = `
type Diagnostics {
  errors: ErrorGroups
}

type ErrorGroups {
  next_link: String
  groups: [Error]
}

type Error {
  state: String
  annotation: String
  error_group_id: String
  app_version: String
  app_build: String
  count: Int
  device_count: Int
  first_occurrence: String
  last_occurrence: String
  exception_type: String
  exception_message: String
  exception_class_name: String
  exception_class_method: Boolean
  exception_method: String
  exception_app_code: Boolean
  exception_file: String
  exception_line: String
  code_raw: String
  reason_frames: [Frame]
}

type Frame {
  class_name: String
  method: String
  class_method: Boolean
  file: String
  line: Int
  app_code: Boolean
  framework_name: String
  code_formatted: String
  code_raw: String
  language: String
  method_params: String
  exception_type: String
  os_exception_type: String
}
`;

export default { Queries, Types };