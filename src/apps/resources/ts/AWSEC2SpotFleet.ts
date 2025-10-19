import {StringProperty} from "../StringProperty"


type Properties = {
  SpotFleetRequestConfigData: {
    Context?: StringProperty
    SpotMaxTotalPrice?: StringProperty
    ExcessCapacityTerminationPolicy?: (string | "Default" | "NoTermination" | "default" | "noTermination")
    TagSpecifications?: {
      ResourceType?: (string | "client-vpn-endpoint" | "customer-gateway" | "dedicated-host" | "dhcp-options" | "egress-only-internet-gateway" | "elastic-gpu" | "elastic-ip" | "export-image-task" | "export-instance-task" | "fleet" | "fpga-image" | "host-reservation" | "image" | "import-image-task" | "import-snapshot-task" | "instance" | "internet-gateway" | "key-pair" | "launch-template" | "local-gateway-route-table-vpc-association" | "natgateway" | "network-acl" | "network-insights-analysis" | "network-insights-path" | "network-interface" | "placement-group" | "reserved-instances" | "route-table" | "security-group" | "snapshot" | "spot-fleet-request" | "spot-instances-request" | "subnet" | "traffic-mirror-filter" | "traffic-mirror-session" | "traffic-mirror-target" | "transit-gateway" | "transit-gateway-attachment" | "transit-gateway-connect-peer" | "transit-gateway-multicast-domain" | "transit-gateway-route-table" | "volume" | "vpc" | "vpc-flow-log" | "vpc-peering-connection" | "vpn-connection" | "vpn-gateway")
      Tags?: {
        Value: StringProperty
        Key: StringProperty
      }[]
    }[]
    InstancePoolsToUseCount?: number
    LaunchTemplateConfigs?: {
      LaunchTemplateSpecification?: {
        LaunchTemplateName?: StringProperty
        Version: StringProperty
        LaunchTemplateId?: StringProperty
      }
      Overrides?: {
        SpotPrice?: StringProperty
        WeightedCapacity?: number
        Priority?: number
        AvailabilityZone?: StringProperty
        SubnetId?: StringProperty
        InstanceRequirements?: {
          InstanceGenerations?: (string | "current" | "previous")[]
          MemoryGiBPerVCpu?: {
            Min?: number
            Max?: number
          }
          AcceleratorTypes?: (string | "gpu" | "fpga" | "inference")[]
          VCpuCount?: {
            Min?: number
            Max?: number
          }
          AcceleratorManufacturers?: (string | "amazon-web-services" | "amd" | "habana" | "nvidia" | "xilinx")[]
          LocalStorage?: (string | "included" | "required" | "excluded")
          CpuManufacturers?: (string | "intel" | "amd" | "amazon-web-services" | "apple")[]
          BareMetal?: (string | "included" | "required" | "excluded")
          RequireHibernateSupport?: boolean
          MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number
          OnDemandMaxPricePercentageOverLowestPrice?: number
          MemoryMiB?: {
            Min?: number
            Max?: number
          }
          LocalStorageTypes?: (string | "hdd" | "ssd")[]
          NetworkInterfaceCount?: {
            Min?: number
            Max?: number
          }
          ExcludedInstanceTypes?: StringProperty[]
          AllowedInstanceTypes?: StringProperty[]
          NetworkBandwidthGbps?: {
            Min?: number
            Max?: number
          }
          AcceleratorCount?: {
            Min?: number
            Max?: number
          }
          BaselinePerformanceFactors?: {
            Cpu?: {
              References?: {
                InstanceFamily?: StringProperty
              }[]
            }
          }
          SpotMaxPricePercentageOverLowestPrice?: number
          BaselineEbsBandwidthMbps?: {
            Min?: number
            Max?: number
          }
          AcceleratorNames?: (string | "a10g" | "a100" | "h100" | "inferentia" | "k520" | "k80" | "m60" | "radeon-pro-v520" | "t4" | "t4g" | "vu9p" | "v100")[]
          AcceleratorTotalMemoryMiB?: {
            Min?: number
            Max?: number
          }
          BurstablePerformance?: (string | "included" | "required" | "excluded")
          TotalLocalStorageGB?: {
            Min?: number
            Max?: number
          }
        }
        InstanceType?: StringProperty
      }[]
    }[]
    TargetCapacityUnitType?: (string | "vcpu" | "memory-mib" | "units")
    IamFleetRole: StringProperty
    SpotMaintenanceStrategies?: {
      CapacityRebalance?: {
        TerminationDelay?: number
        ReplacementStrategy?: (string | "launch" | "launch-before-terminate")
      }
    }
    TerminateInstancesWithExpiration?: boolean
    ValidUntil?: StringProperty
    OnDemandMaxTotalPrice?: StringProperty
    OnDemandAllocationStrategy?: StringProperty
    SpotPrice?: StringProperty
    AllocationStrategy?: (string | "capacityOptimized" | "capacityOptimizedPrioritized" | "diversified" | "lowestPrice" | "priceCapacityOptimized")
    OnDemandTargetCapacity?: number
    Type?: (string | "maintain" | "request")
    LaunchSpecifications?: {
      SecurityGroups?: {
        GroupId: StringProperty
      }[]
      TagSpecifications?: {
        ResourceType?: (string | "client-vpn-endpoint" | "customer-gateway" | "dedicated-host" | "dhcp-options" | "egress-only-internet-gateway" | "elastic-gpu" | "elastic-ip" | "export-image-task" | "export-instance-task" | "fleet" | "fpga-image" | "host-reservation" | "image" | "import-image-task" | "import-snapshot-task" | "instance" | "internet-gateway" | "key-pair" | "launch-template" | "local-gateway-route-table-vpc-association" | "natgateway" | "network-acl" | "network-insights-analysis" | "network-insights-path" | "network-interface" | "placement-group" | "reserved-instances" | "route-table" | "security-group" | "snapshot" | "spot-fleet-request" | "spot-instances-request" | "subnet" | "traffic-mirror-filter" | "traffic-mirror-session" | "traffic-mirror-target" | "transit-gateway" | "transit-gateway-attachment" | "transit-gateway-connect-peer" | "transit-gateway-multicast-domain" | "transit-gateway-route-table" | "volume" | "vpc" | "vpc-flow-log" | "vpc-peering-connection" | "vpn-connection" | "vpn-gateway")
        Tags?: {
          Value: StringProperty
          Key: StringProperty
        }[]
      }[]
      UserData?: StringProperty
      BlockDeviceMappings?: {
        Ebs?: {
          SnapshotId?: StringProperty
          VolumeType?: (string | "gp2" | "gp3" | "io1" | "io2" | "sc1" | "st1" | "standard")
          Encrypted?: boolean
          Iops?: number
          VolumeSize?: number
          DeleteOnTermination?: boolean
        }
        NoDevice?: StringProperty
        VirtualName?: StringProperty
        DeviceName: StringProperty
      }[]
      IamInstanceProfile?: {
        Arn?: StringProperty
      }
      KernelId?: StringProperty
      SubnetId?: StringProperty
      EbsOptimized?: boolean
      KeyName?: StringProperty
      RamdiskId?: StringProperty
      SpotPrice?: StringProperty
      WeightedCapacity?: number
      Placement?: {
        GroupName?: StringProperty
        Tenancy?: (string | "dedicated" | "default" | "host")
        AvailabilityZone?: StringProperty
      }
      NetworkInterfaces?: {
        Description?: StringProperty
        PrivateIpAddresses?: {
          PrivateIpAddress: StringProperty
          Primary?: boolean
        }[]
        SecondaryPrivateIpAddressCount?: number
        DeviceIndex?: number
        Groups?: StringProperty[]
        Ipv6AddressCount?: number
        Ipv6Addresses?: {
          Ipv6Address: StringProperty
        }[]
        SubnetId?: StringProperty
        AssociatePublicIpAddress?: boolean
        NetworkInterfaceId?: StringProperty
        DeleteOnTermination?: boolean
      }[]
      ImageId: StringProperty
      InstanceRequirements?: {
        InstanceGenerations?: (string | "current" | "previous")[]
        MemoryGiBPerVCpu?: {
          Min?: number
          Max?: number
        }
        AcceleratorTypes?: (string | "gpu" | "fpga" | "inference")[]
        VCpuCount?: {
          Min?: number
          Max?: number
        }
        AcceleratorManufacturers?: (string | "amazon-web-services" | "amd" | "habana" | "nvidia" | "xilinx")[]
        LocalStorage?: (string | "included" | "required" | "excluded")
        CpuManufacturers?: (string | "intel" | "amd" | "amazon-web-services" | "apple")[]
        BareMetal?: (string | "included" | "required" | "excluded")
        RequireHibernateSupport?: boolean
        MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number
        OnDemandMaxPricePercentageOverLowestPrice?: number
        MemoryMiB?: {
          Min?: number
          Max?: number
        }
        LocalStorageTypes?: (string | "hdd" | "ssd")[]
        NetworkInterfaceCount?: {
          Min?: number
          Max?: number
        }
        ExcludedInstanceTypes?: StringProperty[]
        AllowedInstanceTypes?: StringProperty[]
        NetworkBandwidthGbps?: {
          Min?: number
          Max?: number
        }
        AcceleratorCount?: {
          Min?: number
          Max?: number
        }
        BaselinePerformanceFactors?: {
          Cpu?: {
            References?: {
              InstanceFamily?: StringProperty
            }[]
          }
        }
        SpotMaxPricePercentageOverLowestPrice?: number
        BaselineEbsBandwidthMbps?: {
          Min?: number
          Max?: number
        }
        AcceleratorNames?: (string | "a10g" | "a100" | "h100" | "inferentia" | "k520" | "k80" | "m60" | "radeon-pro-v520" | "t4" | "t4g" | "vu9p" | "v100")[]
        AcceleratorTotalMemoryMiB?: {
          Min?: number
          Max?: number
        }
        BurstablePerformance?: (string | "included" | "required" | "excluded")
        TotalLocalStorageGB?: {
          Min?: number
          Max?: number
        }
      }
      InstanceType?: StringProperty
      Monitoring?: {
        Enabled?: boolean
      }
    }[]
    InstanceInterruptionBehavior?: (string | "hibernate" | "stop" | "terminate")
    LoadBalancersConfig?: {
      ClassicLoadBalancersConfig?: {
        ClassicLoadBalancers: {
          Name: StringProperty
        }[]
      }
      TargetGroupsConfig?: {
        TargetGroups: {
          Arn: StringProperty
        }[]
      }
    }
    ValidFrom?: StringProperty
    ReplaceUnhealthyInstances?: boolean
    TargetCapacity: number
  }
  Id?: StringProperty
}

export const AWSEC2SpotFleet = ({
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
      Type: 'AWS::EC2::SpotFleet',
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