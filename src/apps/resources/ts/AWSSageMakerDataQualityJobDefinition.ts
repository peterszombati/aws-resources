import {StringProperty} from "../StringProperty"


type Properties = {
  JobDefinitionArn?: StringProperty
  JobDefinitionName?: StringProperty
  DataQualityBaselineConfig?: {
    BaseliningJobName?: StringProperty
    ConstraintsResource?: {
      S3Uri?: StringProperty
    }
    StatisticsResource?: {
      S3Uri?: StringProperty
    }
  }
  DataQualityAppSpecification: {
    ContainerArguments?: StringProperty[]
    ContainerEntrypoint?: StringProperty[]
    ImageUri: StringProperty
    PostAnalyticsProcessorSourceUri?: StringProperty
    RecordPreprocessorSourceUri?: StringProperty
    Environment?: Record<string, any>
  }
  DataQualityJobInput: {
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
  }
  DataQualityJobOutputConfig: {
    KmsKeyId?: StringProperty
    MonitoringOutputs: {
      S3Output: {
        LocalPath: StringProperty
        S3UploadMode?: (string | "Continuous" | "EndOfJob")
        S3Uri: StringProperty
      }
    }[]
  }
  JobResources: {
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
  EndpointName?: StringProperty
  RoleArn: StringProperty
  StoppingCondition?: {
    MaxRuntimeInSeconds: number
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CreationTime?: StringProperty
}

export const AWSSageMakerDataQualityJobDefinition = ({
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
      Type: 'AWS::SageMaker::DataQualityJobDefinition',
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