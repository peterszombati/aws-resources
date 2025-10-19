import {StringProperty} from "../StringProperty"


type Properties = {
  SupportCode?: StringProperty
  ResourceType?: StringProperty
  IsStaticIp?: boolean
  PrivateIpAddress?: StringProperty
  PublicIpAddress?: StringProperty
  Ipv6Addresses?: StringProperty[]
  Location?: {
    AvailabilityZone?: StringProperty
    RegionName?: StringProperty
  }
  Hardware?: {
    CpuCount?: number
    RamSizeInGb?: number
    Disks?: {
      DiskName: StringProperty
      SizeInGb?: StringProperty
      IsSystemDisk?: boolean
      IOPS?: number
      Path: StringProperty
      AttachedTo?: StringProperty
      AttachmentState?: StringProperty
    }[]
  }
  State?: {
    Code?: number
    Name?: StringProperty
  }
  Networking?: {
    Ports: {
      FromPort?: number
      ToPort?: number
      Protocol?: StringProperty
      AccessFrom?: StringProperty
      AccessType?: StringProperty
      CommonName?: StringProperty
      AccessDirection?: StringProperty
      Ipv6Cidrs?: StringProperty[]
      CidrListAliases?: StringProperty[]
      Cidrs?: StringProperty[]
    }[]
    MonthlyTransfer?: {
      GbPerMonthAllocated?: StringProperty
    }
  }
  UserName?: StringProperty
  SshKeyName?: StringProperty
  InstanceName: StringProperty
  AvailabilityZone?: StringProperty
  BundleId: StringProperty
  BlueprintId: StringProperty
  AddOns?: {
    AddOnType: StringProperty
    Status?: (string | "Enabling" | "Disabling" | "Enabled" | "Terminating" | "Terminated" | "Disabled" | "Failed")
    AutoSnapshotAddOnRequest?: {
      SnapshotTimeOfDay?: StringProperty
    }
  }[]
  UserData?: StringProperty
  KeyPairName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  InstanceArn?: StringProperty
}

export const AWSLightsailInstance = ({
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
      Type: 'AWS::Lightsail::Instance',
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