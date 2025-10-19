import {StringProperty} from "../StringProperty"


type Properties = {
  VolumeId?: StringProperty
  AvailabilityZone: StringProperty
  Encrypted?: boolean
  Iops?: number
  KmsKeyId?: StringProperty
  SizeInGB?: number
  SnapshotId?: StringProperty
  Throughput?: number
  VolumeType?: (string | "standard" | "io1" | "io2" | "gp2" | "sc1" | "st1" | "gp3")
  TagSpecifications?: {
    ResourceType?: (string | "instance" | "volume" | "spot-instances-request" | "network-interface")
    Tags?: {
      Key: StringProperty
      Value: StringProperty
    }[]
  }[]
}

export const AWSWorkspacesInstancesVolume = ({
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
      Type: 'AWS::WorkspacesInstances::Volume',
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