import {StringProperty} from "../StringProperty"


type Properties = {
  MultiAttachEnabled?: boolean
  KmsKeyId?: StringProperty
  Encrypted?: boolean
  Size?: number
  AutoEnableIO?: boolean
  OutpostArn?: StringProperty
  AvailabilityZone: StringProperty
  Throughput?: number
  Iops?: number
  VolumeInitializationRate?: number
  SnapshotId?: StringProperty
  VolumeId?: StringProperty
  VolumeType?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2Volume = ({
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
      Type: 'AWS::EC2::Volume',
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