import {StringProperty} from "../StringProperty"


type Properties = {
  AutoScalingGroupProvider?: {
    ManagedScaling?: {
      Status?: (string | "DISABLED" | "ENABLED")
      MinimumScalingStepSize?: number
      InstanceWarmupPeriod?: number
      TargetCapacity?: number
      MaximumScalingStepSize?: number
    }
    AutoScalingGroupArn: StringProperty
    ManagedTerminationProtection?: (string | "DISABLED" | "ENABLED")
    ManagedDraining?: (string | "DISABLED" | "ENABLED")
  }
  ClusterName?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  Name?: StringProperty
  ManagedInstancesProvider?: {
    InfrastructureRoleArn: StringProperty
    PropagateTags?: (string | "CAPACITY_PROVIDER" | "NONE")
    InstanceLaunchTemplate: {
      Ec2InstanceProfileArn: StringProperty
      StorageConfiguration?: {
        StorageSizeGiB: number
      }
      NetworkConfiguration: {
        SecurityGroups?: StringProperty[]
        Subnets: StringProperty[]
      }
      InstanceRequirements?: {
        LocalStorageTypes?: (string | "hdd" | "ssd")[]
        InstanceGenerations?: (string | "current" | "previous")[]
        NetworkInterfaceCount?: {
          Min?: number
          Max?: number
        }
        MemoryGiBPerVCpu?: {
          Min?: number
          Max?: number
        }
        AcceleratorTypes?: (string | "gpu" | "fpga" | "inference")[]
        VCpuCount: {
          Min: number
          Max?: number
        }
        ExcludedInstanceTypes?: StringProperty[]
        AcceleratorManufacturers?: (string | "amazon-web-services" | "amd" | "habana" | "nvidia" | "xilinx")[]
        AllowedInstanceTypes?: StringProperty[]
        LocalStorage?: (string | "included" | "required" | "excluded")
        CpuManufacturers?: (string | "intel" | "amd" | "amazon-web-services")[]
        NetworkBandwidthGbps?: {
          Min?: number
          Max?: number
        }
        AcceleratorCount?: {
          Min?: number
          Max?: number
        }
        BareMetal?: (string | "included" | "required" | "excluded")
        RequireHibernateSupport?: boolean
        MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number
        SpotMaxPricePercentageOverLowestPrice?: number
        BaselineEbsBandwidthMbps?: {
          Min?: number
          Max?: number
        }
        OnDemandMaxPricePercentageOverLowestPrice?: number
        AcceleratorNames?: (string | "a10g" | "a100" | "h100" | "inferentia" | "k520" | "k80" | "m60" | "radeon-pro-v520" | "t4" | "t4g" | "vu9p" | "v100")[]
        AcceleratorTotalMemoryMiB?: {
          Min?: number
          Max?: number
        }
        BurstablePerformance?: (string | "included" | "required" | "excluded")
        MemoryMiB: {
          Min: number
          Max?: number
        }
        TotalLocalStorageGB?: {
          Min?: number
          Max?: number
        }
      }
      Monitoring?: (string | "BASIC" | "DETAILED")
    }
  }
}

export const AWSECSCapacityProvider = ({
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
      Type: 'AWS::ECS::CapacityProvider',
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