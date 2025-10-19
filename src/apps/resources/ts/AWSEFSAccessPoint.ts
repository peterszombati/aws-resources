import {StringProperty} from "../StringProperty"


type Properties = {
  AccessPointId?: StringProperty
  Arn?: StringProperty
  ClientToken?: StringProperty
  AccessPointTags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  FileSystemId: StringProperty
  PosixUser?: {
    Uid: StringProperty
    Gid: StringProperty
    SecondaryGids?: StringProperty[]
  }
  RootDirectory?: {
    Path?: StringProperty
    CreationInfo?: {
      OwnerUid: StringProperty
      OwnerGid: StringProperty
      Permissions: StringProperty
    }
  }
}

export const AWSEFSAccessPoint = ({
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
      Type: 'AWS::EFS::AccessPoint',
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