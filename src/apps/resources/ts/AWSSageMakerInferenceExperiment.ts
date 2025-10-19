import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Type: (string | "ShadowMode")
  Description?: StringProperty
  RoleArn: StringProperty
  EndpointName: StringProperty
  EndpointMetadata?: {
    EndpointName: StringProperty
    EndpointConfigName?: StringProperty
    EndpointStatus?: (string | "Creating" | "Updating" | "SystemUpdating" | "RollingBack" | "InService" | "OutOfService" | "Deleting" | "Failed")
  }
  Schedule?: {
    StartTime?: StringProperty
    EndTime?: StringProperty
  }
  KmsKey?: StringProperty
  DataStorageConfig?: {
    Destination: StringProperty
    KmsKey?: StringProperty
    ContentType?: {
      CsvContentTypes?: StringProperty[]
      JsonContentTypes?: StringProperty[]
    }
  }
  ModelVariants: {
    ModelName: StringProperty
    VariantName: StringProperty
    InfrastructureConfig: {
      InfrastructureType: (string | "RealTimeInference")
      RealTimeInferenceConfig: {
        InstanceType: StringProperty
        InstanceCount: number
      }
    }
  }[]
  ShadowModeConfig?: {
    SourceModelVariantName: StringProperty
    ShadowModelVariants: {
      ShadowModelVariantName: StringProperty
      SamplingPercentage: number
    }[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CreationTime?: StringProperty
  LastModifiedTime?: StringProperty
  Status?: (string | "Creating" | "Created" | "Updating" | "Starting" | "Stopping" | "Running" | "Completed" | "Cancelled")
  StatusReason?: StringProperty
  DesiredState?: (string | "Running" | "Completed" | "Cancelled")
}

export const AWSSageMakerInferenceExperiment = ({
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
      Type: 'AWS::SageMaker::InferenceExperiment',
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