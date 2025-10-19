import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Attributes?: Record<string, any>
  AutoAssignElasticIps: boolean
  AutoAssignPublicIps: boolean
  CustomInstanceProfileArn?: StringProperty
  CustomJson?: Record<string, any>
  CustomRecipes?: {
    Configure?: StringProperty[]
    Deploy?: StringProperty[]
    Setup?: StringProperty[]
    Shutdown?: StringProperty[]
    Undeploy?: StringProperty[]
  }
  CustomSecurityGroupIds?: StringProperty[]
  EnableAutoHealing: boolean
  InstallUpdatesOnBoot?: boolean
  LifecycleEventConfiguration?: {
    ShutdownEventConfiguration?: {
      DelayUntilElbConnectionsDrained?: boolean
      ExecutionTimeout?: number
    }
  }
  LoadBasedAutoScaling?: {
    DownScaling?: {
      CpuThreshold?: number
      IgnoreMetricsTime?: number
      InstanceCount?: number
      LoadThreshold?: number
      MemoryThreshold?: number
      ThresholdsWaitTime?: number
    }
    Enable?: boolean
    UpScaling?: {
      CpuThreshold?: number
      IgnoreMetricsTime?: number
      InstanceCount?: number
      LoadThreshold?: number
      MemoryThreshold?: number
      ThresholdsWaitTime?: number
    }
  }
  Name: StringProperty
  Packages?: StringProperty[]
  Shortname: StringProperty
  StackId: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Type: StringProperty
  UseEbsOptimizedInstances?: boolean
  VolumeConfigurations?: {
    Encrypted?: boolean
    Iops?: number
    MountPoint?: StringProperty
    NumberOfDisks?: number
    RaidLevel?: number
    Size?: number
    VolumeType?: StringProperty
  }[]
}

export const AWSOpsWorksLayer = ({
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
      Type: 'AWS::OpsWorks::Layer',
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