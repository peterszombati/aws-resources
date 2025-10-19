import {StringProperty} from "../StringProperty"

type VolumeSpecification = {
  SizeInGB: number
  Throughput?: number
  VolumeType: StringProperty
  Iops?: number
}

type EbsConfiguration = {
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[]
  EbsOptimized?: boolean
}

type Configuration = {
  ConfigurationProperties?: Record<string, any>
  Configurations?: Configuration[]
  Classification?: StringProperty
}

type OnDemandCapacityReservationOptions = {
  UsageStrategy?: StringProperty
  CapacityReservationResourceGroupArn?: StringProperty
  CapacityReservationPreference?: StringProperty
}

type InstanceFleetResizingSpecifications = {
  OnDemandResizeSpecification?: OnDemandResizingSpecification
  SpotResizeSpecification?: SpotResizingSpecification
}

type InstanceFleetProvisioningSpecifications = {
  SpotSpecification?: SpotProvisioningSpecification
  OnDemandSpecification?: OnDemandProvisioningSpecification
}

type OnDemandResizingSpecification = {
  CapacityReservationOptions?: OnDemandCapacityReservationOptions
  AllocationStrategy?: StringProperty
  TimeoutDurationMinutes?: number
}

type OnDemandProvisioningSpecification = {
  CapacityReservationOptions?: OnDemandCapacityReservationOptions
  AllocationStrategy: StringProperty
}

type EbsBlockDeviceConfig = {
  VolumeSpecification: VolumeSpecification
  VolumesPerInstance?: number
}

type InstanceTypeConfig = {
  BidPrice?: StringProperty
  WeightedCapacity?: number
  EbsConfiguration?: EbsConfiguration
  Priority?: number
  BidPriceAsPercentageOfOnDemandPrice?: number
  CustomAmiId?: StringProperty
  Configurations?: Configuration[]
  InstanceType: StringProperty
}

type SpotResizingSpecification = {
  AllocationStrategy?: StringProperty
  TimeoutDurationMinutes?: number
}

type SpotProvisioningSpecification = {
  AllocationStrategy?: StringProperty
  TimeoutDurationMinutes: number
  TimeoutAction: StringProperty
  BlockDurationMinutes?: number
}


type Properties = {
  InstanceFleetType: StringProperty
  TargetOnDemandCapacity?: number
  ClusterId: StringProperty
  TargetSpotCapacity?: number
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications
  ResizeSpecifications?: InstanceFleetResizingSpecifications
  Id?: StringProperty
  InstanceTypeConfigs?: InstanceTypeConfig[]
  Name?: StringProperty
}

export const AWSEMRInstanceFleetConfig = ({
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
      Type: 'AWS::EMR::InstanceFleetConfig',
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