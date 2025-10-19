import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Type: (string | "OPENZFS")
  OpenZFSConfiguration: {
    VolumeId: StringProperty
    FileSystemIdentity: {
      Type: (string | "POSIX")
      PosixUser: {
        Uid: number
        Gid: number
        SecondaryGids?: {
          Gid: number
        }[]
      }
    }
  }
  S3AccessPoint?: {
    ResourceARN?: StringProperty
    Alias?: StringProperty
    VpcConfiguration?: {
      VpcId: StringProperty
    }
    Policy?: Record<string, any> | StringProperty
  }
}

export const AWSFSxS3AccessPointAttachment = ({
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
      Type: 'AWS::FSx::S3AccessPointAttachment',
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