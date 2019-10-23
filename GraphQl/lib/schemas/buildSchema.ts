const Queries = `
build(owner: String! app: String!): Build
branchConfig(owner: String! app: String!): Build
`;

const Types = `
type Build {
  repos: [Repo]
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

`;

export default { Queries, Types };


/*
needs to be converted to snake case.

type Branch {
  id: ID
  configured: Boolean
  buildNumber: String
  queueTime: String
  startTime: String
  finishTime: String
  lastChangedDate: String
  status: String
  result: String
  sourceBranch: String
  sourceVersion: String
}

type BranchConfig {
  trigger: String
  tests_enabled: Boolean
  badgeIsEnabled: Boolean
  signed: Boolean
  cl

}



  {
    trigger: continous,
    testsEnabled: true,
    badgeIsEnabled: true,
    signed: true,
    cloneFromBranch: string,
    toolsets: {
      xcode: {
        projectOrWorkspacePath: string,
        podfilePath: string,
        cartfilePath: string,
        provisioningProfileEncoded: string,
        certificateEncoded: string,
        provisioningProfileFileId: string,
        certificateFileId: string,
        provisioningProfileUploadId: string,
        appExtensionProvisioningProfileFiles: [
          {
            fileName: string,
            fileId: string,
            uploadId: string,
            targetBundleIdentifier: string
          }
        ],
        certificateUploadId: string,
        certificatePassword: string,
        scheme: string,
        xcodeVersion: string,
        provisioningProfileFilename: string,
        certificateFilename: string,
        teamId: string,
        automaticSigning: true,
        xcodeProjectSha: string,
        archiveConfiguration: string,
        targetToArchive: string,
        forceLegacyBuildSystem: true
      },
      javascript: {
        packageJsonPath: string,
        runTests: true,
        reactNativeVersion: string
      },
      xamarin: {
        slnPath: string,
        isSimBuild: true,
        args: string,
        configuration: string,
        p12File: string,
        p12Pwd: string,
        provProfile: string,
        monoVersion: string,
        sdkBundle: string,
        symlink: string
      },
      android: {
        gradleWrapperPath: android/gradlew,
        module: app,
        buildVariant: release,
        runTests: true,
        runLint: true,
        isRoot: true,
        automaticSigning: true,
        keystorePassword: string,
        keyAlias: string,
        keyPassword: string,
        keystoreFilename: string,
        keystoreEncoded: string
      }
    },
    artifactVersioning: {
      buildNumberFormat: buildId
    },
    id: 0,
  }
}*/