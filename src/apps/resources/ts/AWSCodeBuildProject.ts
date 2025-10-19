import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  ResourceAccessRole?: StringProperty
  VpcConfig?: {
    Subnets?: StringProperty[]
    VpcId?: StringProperty
    SecurityGroupIds?: StringProperty[]
  }
  SecondarySources?: {
    Type: StringProperty
    ReportBuildStatus?: boolean
    Auth?: {
      Resource?: StringProperty
      Type: StringProperty
    }
    SourceIdentifier?: StringProperty
    BuildSpec?: StringProperty
    GitCloneDepth?: number
    BuildStatusConfig?: {
      Context?: StringProperty
      TargetUrl?: StringProperty
    }
    GitSubmodulesConfig?: {
      FetchSubmodules: boolean
    }
    InsecureSsl?: boolean
    Location?: StringProperty
  }[]
  EncryptionKey?: StringProperty
  SecondaryArtifacts?: {
    Path?: StringProperty
    Type: StringProperty
    ArtifactIdentifier?: StringProperty
    OverrideArtifactName?: boolean
    Packaging?: StringProperty
    EncryptionDisabled?: boolean
    Location?: StringProperty
    Name?: StringProperty
    NamespaceType?: StringProperty
  }[]
  Source: {
    Type: StringProperty
    ReportBuildStatus?: boolean
    Auth?: {
      Resource?: StringProperty
      Type: StringProperty
    }
    SourceIdentifier?: StringProperty
    BuildSpec?: StringProperty
    GitCloneDepth?: number
    BuildStatusConfig?: {
      Context?: StringProperty
      TargetUrl?: StringProperty
    }
    GitSubmodulesConfig?: {
      FetchSubmodules: boolean
    }
    InsecureSsl?: boolean
    Location?: StringProperty
  }
  Name?: StringProperty
  LogsConfig?: {
    CloudWatchLogs?: {
      Status: StringProperty
      GroupName?: StringProperty
      StreamName?: StringProperty
    }
    S3Logs?: {
      Status: StringProperty
      EncryptionDisabled?: boolean
      Location?: StringProperty
    }
  }
  ServiceRole: StringProperty
  QueuedTimeoutInMinutes?: number
  SecondarySourceVersions?: {
    SourceIdentifier: StringProperty
    SourceVersion?: StringProperty
  }[]
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  AutoRetryLimit?: number
  SourceVersion?: StringProperty
  Triggers?: {
    BuildType?: StringProperty
    FilterGroups?: Record<string, any>[]
    Webhook?: boolean
    ScopeConfiguration?: {
      Scope?: StringProperty
      Domain?: StringProperty
      Name: StringProperty
    }
    PullRequestBuildPolicy?: {
      RequiresCommentApproval: StringProperty
      ApproverRoles?: StringProperty[]
    }
  }
  Artifacts: {
    Path?: StringProperty
    Type: StringProperty
    ArtifactIdentifier?: StringProperty
    OverrideArtifactName?: boolean
    Packaging?: StringProperty
    EncryptionDisabled?: boolean
    Location?: StringProperty
    Name?: StringProperty
    NamespaceType?: StringProperty
  }
  BadgeEnabled?: boolean
  FileSystemLocations?: {
    MountPoint: StringProperty
    Type: StringProperty
    Identifier: StringProperty
    MountOptions?: StringProperty
    Location: StringProperty
  }[]
  Environment: {
    Type: StringProperty
    EnvironmentVariables?: {
      Value: StringProperty
      Type?: StringProperty
      Name: StringProperty
    }[]
    Fleet?: {
      FleetArn?: StringProperty
    }
    PrivilegedMode?: boolean
    ImagePullCredentialsType?: StringProperty
    Image: StringProperty
    RegistryCredential?: {
      Credential: StringProperty
      CredentialProvider: StringProperty
    }
    ComputeType: StringProperty
    DockerServer?: {
      ComputeType: StringProperty
      SecurityGroupIds?: StringProperty[]
    }
    Certificate?: StringProperty
  }
  ConcurrentBuildLimit?: number
  Visibility?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  BuildBatchConfig?: {
    CombineArtifacts?: boolean
    ServiceRole?: StringProperty
    BatchReportMode?: StringProperty
    TimeoutInMins?: number
    Restrictions?: {
      ComputeTypesAllowed?: StringProperty[]
      MaximumBuildsAllowed?: number
    }
  }
  TimeoutInMinutes?: number
  Cache?: {
    Modes?: StringProperty[]
    Type: StringProperty
    CacheNamespace?: StringProperty
    Location?: StringProperty
  }
}

export const AWSCodeBuildProject = ({
                                      ResourceName,
                                      DependsOn,
                                      Properties,
                                    }: {
  ResourceName: string
  DependsOn?: string | string[]
  Properties: Record<string, any> & Properties
}) => ({
  Resources: {
    [ResourceName]: {
      Type: 'AWS::CodeBuild::Project',
      DependsOn,
      Properties,
    }
  },
  Outputs: {
    [ResourceName]: {
      Value: {
        "Ref": ResourceName,
      },
      Export: {
        Name: {
          "Fn::Sub": "stack:${AWS::StackName}:" + ResourceName
        }
      }
    }
  }
})