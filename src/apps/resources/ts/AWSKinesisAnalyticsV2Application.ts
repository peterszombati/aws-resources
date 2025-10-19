import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationConfiguration?: {
    ApplicationCodeConfiguration?: {
      CodeContent: {
        ZipFileContent?: StringProperty
        S3ContentLocation?: {
          BucketARN: StringProperty
          FileKey: StringProperty
          ObjectVersion?: StringProperty
        }
        TextContent?: StringProperty
      }
      CodeContentType: (string | "PLAINTEXT" | "ZIPFILE")
    }
    ApplicationEncryptionConfiguration?: {
      KeyId?: StringProperty
      KeyType: (string | "AWS_OWNED_KEY" | "CUSTOMER_MANAGED_KEY")
    }
    ApplicationSnapshotConfiguration?: {
      SnapshotsEnabled: boolean
    }
    ApplicationSystemRollbackConfiguration?: {
      RollbackEnabled: boolean
    }
    EnvironmentProperties?: {
      PropertyGroups?: {
        PropertyGroupId?: StringProperty
        PropertyMap?: Record<string, any>
      }[]
    }
    FlinkApplicationConfiguration?: {
      CheckpointConfiguration?: {
        ConfigurationType: (string | "DEFAULT" | "CUSTOM")
        CheckpointingEnabled?: boolean
        CheckpointInterval?: number /* schema format: int64*/
        MinPauseBetweenCheckpoints?: number /* schema format: int64*/
      }
      MonitoringConfiguration?: {
        ConfigurationType: (string | "DEFAULT" | "CUSTOM")
        MetricsLevel?: (string | "APPLICATION" | "OPERATOR" | "PARALLELISM" | "TASK")
        LogLevel?: (string | "DEBUG" | "INFO" | "WARN" | "ERROR")
      }
      ParallelismConfiguration?: {
        ConfigurationType: (string | "CUSTOM" | "DEFAULT")
        ParallelismPerKPU?: number
        Parallelism?: number
        AutoScalingEnabled?: boolean
      }
    }
    SqlApplicationConfiguration?: {
      Inputs?: {
        NamePrefix: StringProperty
        InputSchema: {
          RecordEncoding?: (string | "UTF-8")
          RecordColumns: {
            Mapping?: StringProperty
            Name: StringProperty
            SqlType: StringProperty
          }[]
          RecordFormat: {
            RecordFormatType: (string | "CSV" | "JSON")
            MappingParameters?: {
              CSVMappingParameters?: {
                RecordColumnDelimiter: StringProperty
                RecordRowDelimiter: StringProperty
              }
              JSONMappingParameters?: {
                RecordRowPath: StringProperty
              }
            }
          }
        }
        KinesisStreamsInput?: {
          ResourceARN: StringProperty
        }
        KinesisFirehoseInput?: {
          ResourceARN: StringProperty
        }
        InputProcessingConfiguration?: {
          InputLambdaProcessor?: {
            ResourceARN: StringProperty
          }
        }
        InputParallelism?: {
          Count?: number
        }
      }[]
    }
    ZeppelinApplicationConfiguration?: {
      CatalogConfiguration?: {
        GlueDataCatalogConfiguration?: {
          DatabaseARN?: StringProperty
        }
      }
      MonitoringConfiguration?: {
        LogLevel?: (string | "DEBUG" | "INFO" | "WARN" | "ERROR")
      }
      DeployAsApplicationConfiguration?: {
        S3ContentLocation: {
          BucketARN: StringProperty
          BasePath?: StringProperty
        }
      }
      CustomArtifactsConfiguration?: {
        ArtifactType: (string | "DEPENDENCY_JAR" | "UDF")
        MavenReference?: {
          ArtifactId: StringProperty
          GroupId: StringProperty
          Version: StringProperty
        }
        S3ContentLocation?: {
          BucketARN: StringProperty
          FileKey: StringProperty
          ObjectVersion?: StringProperty
        }
      }[]
    }
    VpcConfigurations?: {
      SecurityGroupIds: StringProperty[]
      SubnetIds: StringProperty[]
    }[]
  }
  ApplicationDescription?: StringProperty
  ApplicationMode?: (string | "INTERACTIVE" | "STREAMING")
  ApplicationName?: StringProperty
  RuntimeEnvironment: StringProperty
  ServiceExecutionRole: StringProperty
  RunConfiguration?: {
    ApplicationRestoreConfiguration?: {
      ApplicationRestoreType: (string | "SKIP_RESTORE_FROM_SNAPSHOT" | "RESTORE_FROM_LATEST_SNAPSHOT" | "RESTORE_FROM_CUSTOM_SNAPSHOT")
      SnapshotName?: StringProperty
    }
    FlinkRunConfiguration?: {
      AllowNonRestoredState?: boolean
    }
  }
  ApplicationMaintenanceConfiguration?: {
    ApplicationMaintenanceWindowStartTime: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSKinesisAnalyticsV2Application = ({
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
      Type: 'AWS::KinesisAnalyticsV2::Application',
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