import {StringProperty} from "../StringProperty"


type Properties = {
  MonitoringScheduleArn?: StringProperty
  MonitoringScheduleName: StringProperty
  MonitoringScheduleConfig: {
    MonitoringJobDefinition?: {
      BaselineConfig?: {
        ConstraintsResource?: {
          S3Uri?: StringProperty
        }
        StatisticsResource?: {
          S3Uri?: StringProperty
        }
      }
      Environment?: Record<string, any>
      MonitoringAppSpecification: {
        ContainerArguments?: StringProperty[]
        ContainerEntrypoint?: StringProperty[]
        ImageUri: StringProperty
        PostAnalyticsProcessorSourceUri?: StringProperty
        RecordPreprocessorSourceUri?: StringProperty
      }
      MonitoringInputs: {
        EndpointInput?: {
          EndpointName: StringProperty
          LocalPath: StringProperty
          S3DataDistributionType?: (string | "FullyReplicated" | "ShardedByS3Key")
          S3InputMode?: (string | "Pipe" | "File")
          ExcludeFeaturesAttribute?: StringProperty
        }
        BatchTransformInput?: {
          DataCapturedDestinationS3Uri: StringProperty
          DatasetFormat: {
            Csv?: {
              Header?: boolean
            }
            Json?: {
              Line?: boolean
            }
            Parquet?: boolean
          }
          LocalPath: StringProperty
          S3DataDistributionType?: (string | "FullyReplicated" | "ShardedByS3Key")
          S3InputMode?: (string | "Pipe" | "File")
          ExcludeFeaturesAttribute?: StringProperty
        }
      }[]
      MonitoringOutputConfig: {
        KmsKeyId?: StringProperty
        MonitoringOutputs: {
          S3Output: {
            LocalPath: StringProperty
            S3UploadMode?: (string | "Continuous" | "EndOfJob")
            S3Uri: StringProperty
          }
        }[]
      }
      MonitoringResources: {
        ClusterConfig: {
          InstanceCount: number
          InstanceType: StringProperty
          VolumeKmsKeyId?: StringProperty
          VolumeSizeInGB: number
        }
      }
      NetworkConfig?: {
        EnableInterContainerTrafficEncryption?: boolean
        EnableNetworkIsolation?: boolean
        VpcConfig?: {
          SecurityGroupIds: StringProperty[]
          Subnets: StringProperty[]
        }
      }
      RoleArn: StringProperty
      StoppingCondition?: {
        MaxRuntimeInSeconds: number
      }
    }
    MonitoringJobDefinitionName?: StringProperty
    MonitoringType?: (string | "DataQuality" | "ModelQuality" | "ModelBias" | "ModelExplainability")
    ScheduleConfig?: {
      ScheduleExpression: StringProperty
      DataAnalysisStartTime?: StringProperty
      DataAnalysisEndTime?: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CreationTime?: StringProperty
  EndpointName?: StringProperty
  FailureReason?: StringProperty
  LastModifiedTime?: StringProperty
  LastMonitoringExecutionSummary?: {
    CreationTime: StringProperty
    EndpointName?: StringProperty
    FailureReason?: StringProperty
    LastModifiedTime: StringProperty
    MonitoringExecutionStatus: (string | "Pending" | "Completed" | "CompletedWithViolations" | "InProgress" | "Failed" | "Stopping" | "Stopped")
    MonitoringScheduleName: StringProperty
    ProcessingJobArn?: StringProperty
    ScheduledTime: StringProperty
  }
  MonitoringScheduleStatus?: (string | "Pending" | "Failed" | "Scheduled" | "Stopped")
}

export const AWSSageMakerMonitoringSchedule = ({
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
      Type: 'AWS::SageMaker::MonitoringSchedule',
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