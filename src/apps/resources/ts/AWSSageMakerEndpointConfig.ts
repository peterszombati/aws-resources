import {StringProperty} from "../StringProperty"


type Properties = {
  ShadowProductionVariants?: {
    ManagedInstanceScaling?: {
      Status?: StringProperty
      MaxInstanceCount?: number
      MinInstanceCount?: number
    }
    ModelName?: StringProperty
    VolumeSizeInGB?: number
    EnableSSMAccess?: boolean
    VariantName: StringProperty
    InitialInstanceCount?: number
    RoutingConfig?: {
      RoutingStrategy?: StringProperty
    }
    InitialVariantWeight?: number
    ModelDataDownloadTimeoutInSeconds?: number
    CapacityReservationConfig?: {
      MlReservationArn?: StringProperty
      CapacityReservationPreference?: StringProperty
    }
    InferenceAmiVersion?: StringProperty
    ContainerStartupHealthCheckTimeoutInSeconds?: number
    ServerlessConfig?: {
      MaxConcurrency: number
      MemorySizeInMB: number
      ProvisionedConcurrency?: number
    }
    InstanceType?: StringProperty
  }[]
  DataCaptureConfig?: {
    CaptureOptions: {
      CaptureMode: StringProperty
    }[]
    KmsKeyId?: StringProperty
    DestinationS3Uri: StringProperty
    InitialSamplingPercentage: number
    CaptureContentTypeHeader?: {
      CsvContentTypes?: StringProperty[]
      JsonContentTypes?: StringProperty[]
    }
    EnableCapture?: boolean
  }
  ExecutionRoleArn?: StringProperty
  EnableNetworkIsolation?: boolean
  ProductionVariants: {
    ManagedInstanceScaling?: {
      Status?: StringProperty
      MaxInstanceCount?: number
      MinInstanceCount?: number
    }
    ModelName?: StringProperty
    VolumeSizeInGB?: number
    EnableSSMAccess?: boolean
    VariantName: StringProperty
    InitialInstanceCount?: number
    RoutingConfig?: {
      RoutingStrategy?: StringProperty
    }
    InitialVariantWeight?: number
    ModelDataDownloadTimeoutInSeconds?: number
    CapacityReservationConfig?: {
      MlReservationArn?: StringProperty
      CapacityReservationPreference?: StringProperty
    }
    InferenceAmiVersion?: StringProperty
    ContainerStartupHealthCheckTimeoutInSeconds?: number
    ServerlessConfig?: {
      MaxConcurrency: number
      MemorySizeInMB: number
      ProvisionedConcurrency?: number
    }
    InstanceType?: StringProperty
  }[]
  KmsKeyId?: StringProperty
  AsyncInferenceConfig?: {
    ClientConfig?: {
      MaxConcurrentInvocationsPerInstance?: number
    }
    OutputConfig: {
      NotificationConfig?: {
        IncludeInferenceResponseIn?: StringProperty[]
        SuccessTopic?: StringProperty
        ErrorTopic?: StringProperty
      }
      KmsKeyId?: StringProperty
      S3OutputPath?: StringProperty
      S3FailurePath?: StringProperty
    }
  }
  VpcConfig?: {
    SecurityGroupIds: StringProperty[]
    Subnets: StringProperty[]
  }
  EndpointConfigName?: StringProperty
  ExplainerConfig?: {
    ClarifyExplainerConfig?: {
      EnableExplanations?: StringProperty
      ShapConfig: {
        TextConfig?: {
          Language: StringProperty
          Granularity: StringProperty
        }
        UseLogit?: boolean
        Seed?: number
        ShapBaselineConfig: {
          MimeType?: StringProperty
          ShapBaseline?: StringProperty
          ShapBaselineUri?: StringProperty
        }
        NumberOfSamples?: number
      }
      InferenceConfig?: {
        ContentTemplate?: StringProperty
        LabelHeaders?: Record<string, any>[]
        MaxPayloadInMB?: number
        ProbabilityIndex?: number
        LabelAttribute?: StringProperty
        FeatureTypes?: Record<string, any>[]
        FeatureHeaders?: Record<string, any>[]
        LabelIndex?: number
        ProbabilityAttribute?: StringProperty
        FeaturesAttribute?: StringProperty
        MaxRecordCount?: number
      }
    }
  }
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerEndpointConfig = ({
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
      Type: 'AWS::SageMaker::EndpointConfig',
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