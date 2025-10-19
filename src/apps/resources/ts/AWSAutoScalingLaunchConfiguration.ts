import {StringProperty} from "../StringProperty"


type Properties = {
  PlacementTenancy?: StringProperty
  SecurityGroups?: StringProperty[]
  LaunchConfigurationName?: StringProperty
  MetadataOptions?: {
    HttpPutResponseHopLimit?: number
    HttpTokens?: StringProperty
    HttpEndpoint?: StringProperty
  }
  InstanceId?: StringProperty
  UserData?: StringProperty
  ClassicLinkVPCSecurityGroups?: StringProperty[]
  BlockDeviceMappings?: {
    Ebs?: {
      SnapshotId?: StringProperty
      VolumeType?: StringProperty
      Encrypted?: boolean
      Throughput?: number
      Iops?: number
      VolumeSize?: number
      DeleteOnTermination?: boolean
    }
    NoDevice?: boolean
    VirtualName?: StringProperty
    DeviceName: StringProperty
  }[]
  IamInstanceProfile?: StringProperty
  KernelId?: StringProperty
  AssociatePublicIpAddress?: boolean
  ClassicLinkVPCId?: StringProperty
  EbsOptimized?: boolean
  KeyName?: StringProperty
  SpotPrice?: StringProperty
  ImageId: StringProperty
  InstanceType: StringProperty
  RamDiskId?: StringProperty
  InstanceMonitoring?: boolean
}

export const AWSAutoScalingLaunchConfiguration = ({
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
      Type: 'AWS::AutoScaling::LaunchConfiguration',
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