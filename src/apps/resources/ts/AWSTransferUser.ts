import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  HomeDirectory?: StringProperty
  HomeDirectoryMappings?: {
    Entry: StringProperty
    Target: StringProperty
    Type?: (string | "FILE" | "DIRECTORY")
  }[]
  HomeDirectoryType?: (string | "PATH" | "LOGICAL")
  Policy?: StringProperty
  PosixProfile?: {
    Uid: number
    Gid: number
    SecondaryGids?: number[]
  }
  Role: StringProperty
  ServerId: StringProperty
  SshPublicKeys?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UserName: StringProperty
}

export const AWSTransferUser = ({
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
      Type: 'AWS::Transfer::User',
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