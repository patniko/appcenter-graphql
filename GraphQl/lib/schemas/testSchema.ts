const Queries = `
  test(owner: String! app: String!): Test
  test_runs(owner: String! app: String!): Test
`;

const Types = `
type Test {
  test_runs: [TestRun]
}

type TestRun {
  id: ID
  date: String
  platform: String
  stats: Stats
  run_status: String
  result_status: String
  state: String
  status: String
  description: String
  app_version: String
  test_series: String
  test_type: String
}

type Stats {
  devices: Int
  devices_finished: Int
  devices_failed: Int
  total: Int
  passed: Int
  failed: Int
  skipped: Int
  peak_memory: Int
  total_device_minutes: Int
},
`;

export default { Queries, Types };


