import {StringProperty} from "../StringProperty"


type Properties = {
  LaunchTemplateName?: StringProperty
  LaunchTemplateData: {
    SecurityGroups?: StringProperty[]
    TagSpecifications?: {
      ResourceType?: StringProperty
      Tags?: {
        Value: StringProperty
        Key: StringProperty
      }[]
    }[]
    NetworkPerformanceOptions?: {
      BandwidthWeighting?: StringProperty
    }
    UserData?: StringProperty
    BlockDeviceMappings?: {
      Ebs?: {
        SnapshotId?: StringProperty
        VolumeType?: StringProperty
        KmsKeyId?: StringProperty
        Encrypted?: boolean
        Throughput?: number
        Iops?: number
        VolumeInitializationRate?: number
        VolumeSize?: number
        DeleteOnTermination?: boolean
      }
      NoDevice?: StringProperty
      VirtualName?: StringProperty
      DeviceName?: StringProperty
    }[]
    MaintenanceOptions?: {
      AutoRecovery?: StringProperty
    }
    IamInstanceProfile?: {
      Arn?: StringProperty
      Name?: StringProperty
    }
    KernelId?: StringProperty
    EbsOptimized?: boolean
    Placement?: {
      GroupName?: StringProperty
      Tenancy?: StringProperty
      SpreadDomain?: StringProperty
      PartitionNumber?: number
      AvailabilityZone?: StringProperty
      Affinity?: StringProperty
      HostId?: StringProperty
      HostResourceGroupArn?: StringProperty
      GroupId?: StringProperty
    }
    NetworkInterfaces?: {
      Description?: StringProperty
      PrivateIpAddress?: StringProperty
      PrivateIpAddresses?: {
        PrivateIpAddress?: StringProperty
        Primary?: boolean
      }[]
      SecondaryPrivateIpAddressCount?: number
      Ipv6PrefixCount?: number
      Ipv4Prefixes?: {
        Ipv4Prefix?: StringProperty
      }[]
      DeviceIndex?: number
      PrimaryIpv6?: boolean
      Ipv4PrefixCount?: number
      EnaQueueCount?: number
      Ipv6Prefixes?: {
        Ipv6Prefix?: StringProperty
      }[]
      SubnetId?: StringProperty
      Ipv6Addresses?: {
        Ipv6Address?: StringProperty
      }[]
      AssociatePublicIpAddress?: boolean
      NetworkInterfaceId?: StringProperty
      NetworkCardIndex?: number
      InterfaceType?: StringProperty
      AssociateCarrierIpAddress?: boolean
      EnaSrdSpecification?: {
        EnaSrdEnabled?: boolean
        EnaSrdUdpSpecification?: {
          EnaSrdUdpEnabled?: boolean
        }
      }
      Ipv6AddressCount?: number
      Groups?: StringProperty[]
      DeleteOnTermination?: boolean
      ConnectionTrackingSpecification?: {
        UdpTimeout?: number
        TcpEstablishedTimeout?: number
        UdpStreamTimeout?: number
      }
    }[]
    EnclaveOptions?: {
      Enabled?: boolean
    }
    ImageId?: StringProperty
    InstanceType?: StringProperty
    Monitoring?: {
      Enabled?: boolean
    }
    HibernationOptions?: {
      Configured?: boolean
    }
    MetadataOptions?: {
      HttpPutResponseHopLimit?: number
      HttpTokens?: StringProperty
      HttpProtocolIpv6?: StringProperty
      InstanceMetadataTags?: StringProperty
      HttpEndpoint?: StringProperty
    }
    LicenseSpecifications?: {
      LicenseConfigurationArn?: StringProperty
    }[]
    InstanceInitiatedShutdownBehavior?: StringProperty
    DisableApiStop?: boolean
    CpuOptions?: {
      ThreadsPerCore?: number
      AmdSevSnp?: (string | "enabled" | "disabled")
      CoreCount?: number
    }
    PrivateDnsNameOptions?: {
      EnableResourceNameDnsARecord?: boolean
      HostnameType?: StringProperty
      EnableResourceNameDnsAAAARecord?: boolean
    }
    SecurityGroupIds?: StringProperty[]
    KeyName?: StringProperty
    DisableApiTermination?: boolean
    InstanceMarketOptions?: {
      SpotOptions?: {
        SpotInstanceType?: StringProperty
        InstanceInterruptionBehavior?: StringProperty
        MaxPrice?: StringProperty
        BlockDurationMinutes?: number
        ValidUntil?: StringProperty
      }
      MarketType?: StringProperty
    }
    InstanceRequirements?: {
      InstanceGenerations?: StringProperty[]
      MemoryGiBPerVCpu?: {
        Min?: number
        Max?: number
      }
      AcceleratorTypes?: StringProperty[]
      VCpuCount?: {
        Min?: number
        Max?: number
      }
      AcceleratorManufacturers?: StringProperty[]
      LocalStorage?: StringProperty
      CpuManufacturers?: StringProperty[]
      BareMetal?: StringProperty
      RequireHibernateSupport?: boolean
      MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number
      OnDemandMaxPricePercentageOverLowestPrice?: number
      MemoryMiB?: {
        Min?: number
        Max?: number
      }
      LocalStorageTypes?: StringProperty[]
      NetworkInterfaceCount?: {
        Min?: number
        Max?: number
      }
      ExcludedInstanceTypes?: StringProperty[]
      AllowedInstanceTypes?: StringProperty[]
      AcceleratorCount?: {
        Min?: number
        Max?: number
      }
      NetworkBandwidthGbps?: {
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
      AcceleratorNames?: StringProperty[]
      AcceleratorTotalMemoryMiB?: {
        Min?: number
        Max?: number
      }
      BurstablePerformance?: StringProperty
      TotalLocalStorageGB?: {
        Min?: number
        Max?: number
      }
    }
    RamDiskId?: StringProperty
    CapacityReservationSpecification?: {
      CapacityReservationPreference?: StringProperty
      CapacityReservationTarget?: {
        CapacityReservationResourceGroupArn?: StringProperty
        CapacityReservationId?: StringProperty
      }
    }
    CreditSpecification?: {
      CpuCredits?: StringProperty
    }
  }
  VersionDescription?: StringProperty
  TagSpecifications?: {
    ResourceType?: StringProperty
    Tags?: {
      Value: StringProperty
      Key: StringProperty
    }[]
  }[]
  LatestVersionNumber?: StringProperty
  LaunchTemplateId?: StringProperty
  DefaultVersionNumber?: StringProperty
}

export const AWSEC2LaunchTemplate = ({
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
      Type: 'AWS::EC2::LaunchTemplate',
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