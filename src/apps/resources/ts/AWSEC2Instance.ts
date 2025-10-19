import {StringProperty} from "../StringProperty"


type Properties = {
  PrivateDnsName?: StringProperty
  Volumes?: {
    VolumeId: StringProperty
    Device: StringProperty
  }[]
  PrivateIp?: StringProperty
  EnclaveOptions?: {
    Enabled?: boolean
  }
  ImageId?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  AdditionalInfo?: StringProperty
  HibernationOptions?: {
    Configured?: boolean
  }
  LicenseSpecifications?: {
    LicenseConfigurationArn: StringProperty
  }[]
  MetadataOptions?: {
    HttpPutResponseHopLimit?: number
    HttpProtocolIpv6?: (string | "disabled" | "enabled")
    HttpTokens?: (string | "optional" | "required")
    InstanceMetadataTags?: (string | "disabled" | "enabled")
    HttpEndpoint?: (string | "disabled" | "enabled")
  }
  InstanceId?: StringProperty
  CpuOptions?: {
    ThreadsPerCore?: number
    CoreCount?: number
  }
  AvailabilityZone?: StringProperty
  PrivateDnsNameOptions?: {
    EnableResourceNameDnsARecord?: boolean
    HostnameType?: (string | "ip-name" | "resource-name")
    EnableResourceNameDnsAAAARecord?: boolean
  }
  HostId?: StringProperty
  PublicDnsName?: StringProperty
  SecurityGroupIds?: StringProperty[]
  PlacementGroupName?: StringProperty
  SsmAssociations?: {
    AssociationParameters?: {
      Value: StringProperty[]
      Key: StringProperty
    }[]
    DocumentName: StringProperty
  }[]
  VpcId?: StringProperty
  State?: {
    Code?: StringProperty
    Name?: StringProperty
  }
  Affinity?: (string | "default" | "host")
  Tenancy?: StringProperty
  SecurityGroups?: StringProperty[]
  PrivateIpAddress?: StringProperty
  UserData?: StringProperty
  BlockDeviceMappings?: {
    Ebs?: {
      SnapshotId?: StringProperty
      VolumeType?: StringProperty
      KmsKeyId?: StringProperty
      Encrypted?: boolean
      Iops?: number
      VolumeSize?: number
      DeleteOnTermination?: boolean
    }
    NoDevice?: Record<string, any>
    VirtualName?: StringProperty
    DeviceName: StringProperty
  }[]
  IamInstanceProfile?: StringProperty
  Ipv6Addresses?: {
    Ipv6Address: StringProperty
  }[]
  KernelId?: StringProperty
  SubnetId?: StringProperty
  EbsOptimized?: boolean
  PropagateTagsToVolumeOnCreation?: boolean
  ElasticGpuSpecifications?: {
    Type: StringProperty
  }[]
  ElasticInferenceAccelerators?: {
    Type: StringProperty
    Count?: number
  }[]
  Ipv6AddressCount?: number
  LaunchTemplate?: {
    LaunchTemplateName?: StringProperty
    Version?: StringProperty
    LaunchTemplateId?: StringProperty
  }
  NetworkInterfaces?: {
    Description?: StringProperty
    PrivateIpAddress?: StringProperty
    PrivateIpAddresses?: {
      PrivateIpAddress: StringProperty
      Primary: boolean
    }[]
    SecondaryPrivateIpAddressCount?: number
    DeviceIndex: StringProperty
    GroupSet?: StringProperty[]
    Ipv6Addresses?: {
      Ipv6Address: StringProperty
    }[]
    SubnetId?: StringProperty
    AssociatePublicIpAddress?: boolean
    NetworkInterfaceId?: StringProperty
    AssociateCarrierIpAddress?: boolean
    EnaSrdSpecification?: {
      EnaSrdEnabled?: boolean
      EnaSrdUdpSpecification?: {
        EnaSrdUdpEnabled?: boolean
      }
    }
    Ipv6AddressCount?: number
    DeleteOnTermination?: boolean
  }[]
  InstanceType?: StringProperty
  Monitoring?: boolean
  PublicIp?: StringProperty
  InstanceInitiatedShutdownBehavior?: StringProperty
  HostResourceGroupArn?: StringProperty
  DisableApiTermination?: boolean
  KeyName?: StringProperty
  RamdiskId?: StringProperty
  SourceDestCheck?: boolean
  CreditSpecification?: {
    CPUCredits?: StringProperty
  }
}

export const AWSEC2Instance = ({
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
      Type: 'AWS::EC2::Instance',
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