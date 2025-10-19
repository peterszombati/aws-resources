import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  AvailabilityZone?: StringProperty
  PrivateDnsName?: StringProperty
  PrivateIp?: StringProperty
  PublicDnsName?: StringProperty
  PublicIp?: StringProperty
  AgentVersion?: StringProperty
  AmiId?: StringProperty
  Architecture?: StringProperty
  AutoScalingType?: StringProperty
  BlockDeviceMappings?: {
    DeviceName?: StringProperty
    Ebs?: {
      DeleteOnTermination?: boolean
      Iops?: number
      SnapshotId?: StringProperty
      VolumeSize?: number
      VolumeType?: StringProperty
    }
    NoDevice?: StringProperty
    VirtualName?: StringProperty
  }[]
  EbsOptimized?: boolean
  ElasticIps?: StringProperty[]
  Hostname?: StringProperty
  InstallUpdatesOnBoot?: boolean
  InstanceType: StringProperty
  LayerIds: StringProperty[]
  Os?: StringProperty
  RootDeviceType?: StringProperty
  SshKeyName?: StringProperty
  StackId: StringProperty
  SubnetId?: StringProperty
  Tenancy?: StringProperty
  TimeBasedAutoScaling?: {
    Friday?: Record<string, any>
    Monday?: Record<string, any>
    Saturday?: Record<string, any>
    Sunday?: Record<string, any>
    Thursday?: Record<string, any>
    Tuesday?: Record<string, any>
    Wednesday?: Record<string, any>
  }
  VirtualizationType?: StringProperty
  Volumes?: StringProperty[]
}

export const AWSOpsWorksInstance = ({
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
      Type: 'AWS::OpsWorks::Instance',
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