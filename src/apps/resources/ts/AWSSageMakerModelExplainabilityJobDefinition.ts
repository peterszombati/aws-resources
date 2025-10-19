import {StringProperty} from "../StringProperty"


type Properties = {
  JobDefinitionArn?: StringProperty
  JobDefinitionName?: StringProperty
  ModelExplainabilityBaselineConfig?: {
    BaseliningJobName?: StringProperty
    ConstraintsResource?: {
      S3Uri?: StringProperty
    }
  }
  ModelExplainabilityAppSpecification: {
    ImageUri: StringProperty
    ConfigUri: StringProperty
    Environment?: Record<string, any>
  }
  ModelExplainabilityJobInput: {
    EndpointInput?: {
      EndpointName: StringProperty
      LocalPath: StringProperty
      S3DataDistributionType?: (string | "FullyReplicated" | "ShardedByS3Key")
      S3InputMode?: (string | "Pipe" | "File")
      FeaturesAttribute?: StringProperty
      InferenceAttribute?: StringProperty
      ProbabilityAttribute?: StringProperty
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
      FeaturesAttribute?: StringProperty
      InferenceAttribute?: StringProperty
      ProbabilityAttribute?: StringProperty
    }
  }
  ModelExplainabilityJobOutputConfig: {
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

export const AWSSageMakerModelExplainabilityJobDefinition = ({
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
      Type: 'AWS::SageMaker::ModelExplainabilityJobDefinition',
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