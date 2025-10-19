import {StringProperty} from "../StringProperty"

type Architecture = (string | "ARM64" | "X86_64")

type ImageConfigurationInput = {
  ImageUri?: StringProperty
}

type InteractiveConfiguration = {
  LivyEndpointEnabled?: boolean
  StudioEnabled?: boolean
}

type IdentityCenterConfiguration = {
  IdentityCenterInstanceArn?: StringProperty
}

type ConfigurationList = ConfigurationObject[]

type SchedulerConfiguration = {
  QueueTimeoutMinutes?: number
  MaxConcurrentRuns?: number
}

type MonitoringConfiguration = {
  S3MonitoringConfiguration?: S3MonitoringConfiguration
  ManagedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration
  CloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration
  PrometheusMonitoringConfiguration?: PrometheusMonitoringConfiguration
}

type S3MonitoringConfiguration = any

type ManagedPersistenceMonitoringConfiguration = any

type CloudWatchLoggingConfiguration = any

type PrometheusMonitoringConfiguration = any

type LogTypeMapKeyValuePair = {
  Key: WorkerTypeString
  Value: LogTypeList
}

type LogTypeList = LogTypeString[]

type InitialCapacityConfigMap = InitialCapacityConfigKeyValuePair[]

type InitialCapacityConfigKeyValuePair = {
  Key: StringProperty
  Value: InitialCapacityConfig
}

type InitialCapacityConfig = {
  WorkerCount: number /* schema format: int64*/
  WorkerConfiguration: WorkerConfiguration
}

type WorkerConfiguration = {
  Cpu: CpuSize
  Memory: MemorySize
  Disk?: DiskSize
  DiskType?: DiskType
}

type MaximumAllowedResources = {
  Cpu: CpuSize
  Memory: MemorySize
  Disk?: DiskSize
}

type AutoStartConfiguration = {
  Enabled?: boolean
}

type AutoStopConfiguration = {
  Enabled?: boolean
  IdleTimeoutMinutes?: number
}

type NetworkConfiguration = {
  SubnetIds?: SubnetId[]
  SecurityGroupIds?: SecurityGroupId[]
}

type SubnetId = StringProperty

type SecurityGroupId = StringProperty

type UriString = StringProperty

type RemoteWriteUrl = StringProperty

type EncryptionKeyArn = StringProperty

type Classification = StringProperty

type LogGroupName = StringProperty

type LogStreamNamePrefix = StringProperty

type LogTypeString = StringProperty

type WorkerTypeString = StringProperty

type Tag = {
  Key: StringProperty
  Value: StringProperty
}

type ConfigurationObject = {
  Classification: Classification
  Properties?: Record<string, any>
  Configurations?: ConfigurationObject[]
}

type SensitivePropertiesMap = StringProperty

type SensitivePropertiesKeyValuePair = StringProperty

type CpuSize = StringProperty

type MemorySize = StringProperty

type DiskSize = StringProperty

type DiskType = StringProperty

type WorkerTypeSpecificationInput = {
  ImageConfiguration?: ImageConfigurationInput
}

type WorkerTypeSpecificationInputMap = Record<string, any>


type Properties = {
  Architecture?: Architecture
  Name?: StringProperty
  ReleaseLabel: StringProperty
  Type: StringProperty
  InitialCapacity?: InitialCapacityConfigMap
  MaximumCapacity?: MaximumAllowedResources
  Tags?: Tag[]
  AutoStartConfiguration?: AutoStartConfiguration
  AutoStopConfiguration?: AutoStopConfiguration
  ImageConfiguration?: ImageConfigurationInput
  MonitoringConfiguration?: MonitoringConfiguration
  RuntimeConfiguration?: ConfigurationList
  InteractiveConfiguration?: InteractiveConfiguration
  NetworkConfiguration?: NetworkConfiguration
  Arn?: StringProperty
  ApplicationId?: StringProperty
  WorkerTypeSpecifications?: WorkerTypeSpecificationInputMap
  SchedulerConfiguration?: SchedulerConfiguration
  IdentityCenterConfiguration?: IdentityCenterConfiguration
}

export const AWSEMRServerlessApplication = ({
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
      Type: 'AWS::EMRServerless::Application',
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