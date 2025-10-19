import {StringProperty} from "../StringProperty"


type Properties = {
  AppSpecification: {
    ContainerArguments?: StringProperty[]
    ContainerEntrypoint?: StringProperty[]
    ImageUri: StringProperty
  }
  Environment?: Record<string, any>
  ExperimentConfig?: {
    ExperimentName?: StringProperty
    TrialName?: StringProperty
    TrialComponentDisplayName?: StringProperty
    RunName?: StringProperty
  }
  NetworkConfig?: {
    EnableInterContainerTrafficEncryption?: boolean
    EnableNetworkIsolation?: boolean
    VpcConfig?: {
      SecurityGroupIds: StringProperty[]
      Subnets: StringProperty[]
    }
  }
  ProcessingInputs?: {
    S3Input?: {
      LocalPath?: StringProperty
      S3CompressionType?: (string | "None" | "Gzip")
      S3DataDistributionType?: (string | "FullyReplicated" | "ShardedByS3Key")
      S3DataType: (string | "ManifestFile" | "S3Prefix")
      S3InputMode?: (string | "File" | "Pipe")
      S3Uri: StringProperty
    }
    DatasetDefinition?: {
      AthenaDatasetDefinition?: {
        Catalog: StringProperty
        Database: StringProperty
        OutputS3Uri: StringProperty
        QueryString: StringProperty
        WorkGroup?: StringProperty
        OutputFormat: (string | "PARQUET" | "AVRO" | "ORC" | "JSON" | "TEXTFILE")
        KmsKeyId?: StringProperty
        OutputCompression?: (string | "GZIP" | "SNAPPY" | "ZLIB")
      }
      RedshiftDatasetDefinition?: {
        Database: StringProperty
        DbUser: StringProperty
        QueryString: StringProperty
        ClusterId: StringProperty
        ClusterRoleArn: StringProperty
        OutputS3Uri: StringProperty
        OutputFormat: (string | "PARQUET" | "CSV")
        KmsKeyId?: StringProperty
        OutputCompression?: (string | "None" | "GZIP" | "SNAPPY" | "ZSTD" | "BZIP2")
      }
      DataDistributionType?: (string | "FullyReplicated" | "ShardedByS3Key")
      InputMode?: (string | "File" | "Pipe")
      LocalPath?: StringProperty
    }
    InputName: StringProperty
    AppManaged?: boolean
  }[]
  ProcessingJobName?: StringProperty
  ProcessingOutputConfig?: {
    KmsKeyId?: StringProperty
    Outputs: {
      OutputName: StringProperty
      AppManaged?: boolean
      S3Output?: {
        LocalPath?: StringProperty
        S3UploadMode: (string | "Continuous" | "EndOfJob")
        S3Uri: StringProperty
      }
      FeatureStoreOutput?: {
        FeatureGroupName: StringProperty
      }
    }[]
  }
  ProcessingResources: {
    ClusterConfig: {
      InstanceCount: number
      InstanceType: (string | "ml.t3.medium" | "ml.t3.large" | "ml.t3.xlarge" | "ml.t3.2xlarge" | "ml.m4.xlarge" | "ml.m4.2xlarge" | "ml.m4.4xlarge" | "ml.m4.10xlarge" | "ml.m4.16xlarge" | "ml.c4.xlarge" | "ml.c4.2xlarge" | "ml.c4.4xlarge" | "ml.c4.8xlarge" | "ml.c5.xlarge" | "ml.c5.2xlarge" | "ml.c5.4xlarge" | "ml.c5.9xlarge" | "ml.c5.18xlarge" | "ml.m5.large" | "ml.m5.xlarge" | "ml.m5.2xlarge" | "ml.m5.4xlarge" | "ml.m5.12xlarge" | "ml.m5.24xlarge" | "ml.r5.large" | "ml.r5.xlarge" | "ml.r5.2xlarge" | "ml.r5.4xlarge" | "ml.r5.8xlarge" | "ml.r5.12xlarge" | "ml.r5.16xlarge" | "ml.r5.24xlarge" | "ml.g4dn.xlarge" | "ml.g4dn.2xlarge" | "ml.g4dn.4xlarge" | "ml.g4dn.8xlarge" | "ml.g4dn.12xlarge" | "ml.g4dn.16xlarge" | "ml.g5.xlarge" | "ml.g5.2xlarge" | "ml.g5.4xlarge" | "ml.g5.8xlarge" | "ml.g5.16xlarge" | "ml.g5.12xlarge" | "ml.g5.24xlarge" | "ml.g5.48xlarge" | "ml.r5d.large" | "ml.r5d.xlarge" | "ml.r5d.2xlarge" | "ml.r5d.4xlarge" | "ml.r5d.8xlarge" | "ml.r5d.12xlarge" | "ml.r5d.16xlarge" | "ml.r5d.24xlarge" | "ml.g6.xlarge" | "ml.g6.2xlarge" | "ml.g6.4xlarge" | "ml.g6.8xlarge" | "ml.g6.12xlarge" | "ml.g6.16xlarge" | "ml.g6.24xlarge" | "ml.g6.48xlarge" | "ml.g6e.xlarge" | "ml.g6e.2xlarge" | "ml.g6e.4xlarge" | "ml.g6e.8xlarge" | "ml.g6e.12xlarge" | "ml.g6e.16xlarge" | "ml.g6e.24xlarge" | "ml.g6e.48xlarge" | "ml.m6i.large" | "ml.m6i.xlarge" | "ml.m6i.2xlarge" | "ml.m6i.4xlarge" | "ml.m6i.8xlarge" | "ml.m6i.12xlarge" | "ml.m6i.16xlarge" | "ml.m6i.24xlarge" | "ml.m6i.32xlarge" | "ml.c6i.xlarge" | "ml.c6i.2xlarge" | "ml.c6i.4xlarge" | "ml.c6i.8xlarge" | "ml.c6i.12xlarge" | "ml.c6i.16xlarge" | "ml.c6i.24xlarge" | "ml.c6i.32xlarge" | "ml.m7i.large" | "ml.m7i.xlarge" | "ml.m7i.2xlarge" | "ml.m7i.4xlarge" | "ml.m7i.8xlarge" | "ml.m7i.12xlarge" | "ml.m7i.16xlarge" | "ml.m7i.24xlarge" | "ml.m7i.48xlarge" | "ml.c7i.large" | "ml.c7i.xlarge" | "ml.c7i.2xlarge" | "ml.c7i.4xlarge" | "ml.c7i.8xlarge" | "ml.c7i.12xlarge" | "ml.c7i.16xlarge" | "ml.c7i.24xlarge" | "ml.c7i.48xlarge" | "ml.r7i.large" | "ml.r7i.xlarge" | "ml.r7i.2xlarge" | "ml.r7i.4xlarge" | "ml.r7i.8xlarge" | "ml.r7i.12xlarge" | "ml.r7i.16xlarge" | "ml.r7i.24xlarge" | "ml.r7i.48xlarge")
      VolumeSizeInGB: number
      VolumeKmsKeyId?: StringProperty
    }
  }
  RoleArn: StringProperty
  StoppingCondition?: {
    MaxRuntimeInSeconds: number
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  ProcessingJobArn?: StringProperty
  AutoMLJobArn?: StringProperty
  ExitMessage?: StringProperty
  FailureReason?: StringProperty
  MonitoringScheduleArn?: StringProperty
  TrainingJobArn?: StringProperty
  ProcessingJobStatus?: (string | "Completed" | "InProgress" | "Stopping" | "Stopped" | "Failed")
  CreationTime?: StringProperty
  LastModifiedTime?: StringProperty
  ProcessingStartTime?: StringProperty
  ProcessingEndTime?: StringProperty
}

export const AWSSageMakerProcessingJob = ({
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
      Type: 'AWS::SageMaker::ProcessingJob',
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