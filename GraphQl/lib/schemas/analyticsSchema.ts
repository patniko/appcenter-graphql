const Queries = `
analytics(owner: String! app: String! end_date: String, daysAgo: Int): Analytics
`;

const Types = `
  type Analytics {
    devices: DeviceCounts
    places: [Place]
    oses: [OS]
    models: [Model]
    languages: [Language]
  }

  type DeviceCounts {
    daily: [DeviceCount]
    weekly: [DeviceCount]
    monthly: [DeviceCount]
  }

  type DeviceCount {
    datetime: String
    count: Int
  }

  type Place {
    code: String
    count: Int
    previous_count: Int
  }
  type OS {
    os_name: String
    count: Int
    previous_count: Int
  }
  type Model {
    model_name: String
    count: Int
    previous_count: Int
  }
  type Language {
    language_name: String
    count: Int
    previous_count: Int
  }
`;

export default { Queries, Types };