import {StringProperty} from "../StringProperty"


type Properties = {
  ManagedInstance?: {
    BlockDeviceMappings?: {
      DeviceName?: StringProperty
      Ebs?: {
        VolumeType?: (string | "standard" | "io1" | "io2" | "gp2" | "sc1" | "st1" | "gp3")
        Encrypted?: boolean
        KmsKeyId?: StringProperty
        Iops?: number
        Throughput?: number
        VolumeSize?: number
      }
      NoDevice?: StringProperty
      VirtualName?: StringProperty
    }[]
    CapacityReservationSpecification?: {
      CapacityReservationPreference?: (string | "capacity-reservations-only" | "open" | "none")
      CapacityReservationTarget?: {
        CapacityReservationId?: StringProperty
        CapacityReservationResourceGroupArn?: StringProperty
      }
    }
    CpuOptions?: {
      CoreCount?: number
      ThreadsPerCore?: number
    }
    CreditSpecification?: {
      CpuCredits?: (string | "standard" | "unlimited")
    }
    DisableApiStop?: boolean
    EbsOptimized?: boolean
    EnablePrimaryIpv6?: boolean
    EnclaveOptions?: {
      Enabled?: boolean
    }
    HibernationOptions?: {
      Configured?: boolean
    }
    IamInstanceProfile?: {
      Arn?: StringProperty
      Name?: StringProperty
    }
    ImageId: StringProperty
    InstanceMarketOptions?: {
      MarketType?: (string | "spot" | "capacity-block")
      SpotOptions?: {
        InstanceInterruptionBehavior?: (string | "hibernate" | "stop")
        MaxPrice?: StringProperty
        SpotInstanceType?: (string | "one-time" | "persistent")
        ValidUntilUtc?: StringProperty
      }
    }
    InstanceType: StringProperty
    Ipv6AddressCount?: number
    KeyName?: StringProperty
    LicenseSpecifications?: {
      LicenseConfigurationArn?: StringProperty
    }[]
    MaintenanceOptions?: {
      AutoRecovery?: (string | "disabled" | "default")
    }
    MetadataOptions?: {
      HttpEndpoint?: (string | "enabled" | "disabled")
      HttpProtocolIpv6?: (string | "enabled" | "disabled")
      HttpPutResponseHopLimit?: number
      HttpTokens?: (string | "optional" | "required")
      InstanceMetadataTags?: (string | "enabled" | "disabled")
    }
    Monitoring?: {
      Enabled?: boolean
    }
    NetworkInterfaces?: {
      Description?: StringProperty
      DeviceIndex?: number
      Groups?: StringProperty[]
      SubnetId?: StringProperty
    }[]
    NetworkPerformanceOptions?: {
      BandwidthWeighting?: (string | "default" | "vpc-1" | "ebs-1")
    }
    Placement?: {
      AvailabilityZone?: StringProperty
      GroupId?: StringProperty
      GroupName?: StringProperty
      PartitionNumber?: number
      Tenancy?: (string | "default" | "dedicated" | "host")
    }
    PrivateDnsNameOptions?: {
      HostnameType?: (string | "ip-name" | "resource-name")
      EnableResourceNameDnsARecord?: boolean
      EnableResourceNameDnsAAAARecord?: boolean
    }
    SubnetId?: StringProperty
    TagSpecifications?: {
      ResourceType?: (string | "instance" | "volume" | "spot-instances-request" | "network-interface")
      Tags?: {
        Key: StringProperty
        Value?: StringProperty
      }[]
    }[]
    UserData?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  WorkspaceInstanceId?: StringProperty
  ProvisionState?: (string | "ALLOCATING" | "ALLOCATED" | "DEALLOCATING" | "DEALLOCATED" | "ERROR_ALLOCATING" | "ERROR_DEALLOCATING")
  EC2ManagedInstance?: {
    InstanceId?: StringProperty
  }
}

export const AWSWorkspacesInstancesWorkspaceInstance = ({
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
      Type: 'AWS::WorkspacesInstances::WorkspaceInstance',
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