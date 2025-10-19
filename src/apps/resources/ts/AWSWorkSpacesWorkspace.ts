import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  BundleId: StringProperty
  DirectoryId: StringProperty
  RootVolumeEncryptionEnabled?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UserName: StringProperty
  UserVolumeEncryptionEnabled?: boolean
  VolumeEncryptionKey?: StringProperty
  WorkspaceProperties?: {
    ComputeTypeName?: StringProperty
    RootVolumeSizeGib?: number
    RunningMode?: StringProperty
    RunningModeAutoStopTimeoutInMinutes?: number
    UserVolumeSizeGib?: number
  }
}

export const AWSWorkSpacesWorkspace = ({
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
      Type: 'AWS::WorkSpaces::Workspace',
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