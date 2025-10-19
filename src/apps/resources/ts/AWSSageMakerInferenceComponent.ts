import {StringProperty} from "../StringProperty"


type Properties = {
  InferenceComponentArn?: StringProperty
  InferenceComponentName?: StringProperty
  EndpointArn?: StringProperty
  EndpointName: StringProperty
  VariantName?: StringProperty
  FailureReason?: StringProperty
  Specification: {
    ModelName?: StringProperty
    BaseInferenceComponentName?: StringProperty
    Container?: {
      DeployedImage?: {
        SpecifiedImage?: StringProperty
        ResolvedImage?: StringProperty
        ResolutionTime?: StringProperty
      }
      Image?: StringProperty
      ArtifactUrl?: StringProperty
      Environment?: Record<string, any>
    }
    StartupParameters?: {
      ModelDataDownloadTimeoutInSeconds?: number
      ContainerStartupHealthCheckTimeoutInSeconds?: number
    }
    ComputeResourceRequirements?: {
      NumberOfCpuCoresRequired?: number
      NumberOfAcceleratorDevicesRequired?: number
      MinMemoryRequiredInMb?: number
      MaxMemoryRequiredInMb?: number
    }
  }
  RuntimeConfig?: {
    CopyCount?: number
    DesiredCopyCount?: number
    CurrentCopyCount?: number
  }
  DeploymentConfig?: {
    RollingUpdatePolicy?: {
      MaximumBatchSize?: {
        Type: (string | "COPY_COUNT" | "CAPACITY_PERCENT")
        Value: number
      }
      WaitIntervalInSeconds?: number
      RollbackMaximumBatchSize?: {
        Type: (string | "COPY_COUNT" | "CAPACITY_PERCENT")
        Value: number
      }
      MaximumExecutionTimeoutInSeconds?: number
    }
    AutoRollbackConfiguration?: {
      Alarms: {
        AlarmName: StringProperty
      }[]
    }
  }
  InferenceComponentStatus?: (string | "InService" | "Creating" | "Updating" | "Failed" | "Deleting")
  CreationTime?: StringProperty
  LastModifiedTime?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSageMakerInferenceComponent = ({
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
      Type: 'AWS::SageMaker::InferenceComponent',
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