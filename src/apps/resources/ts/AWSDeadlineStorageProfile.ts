import {StringProperty} from "../StringProperty"


type Properties = {
  DisplayName: StringProperty
  FarmId: StringProperty
  FileSystemLocations?: {
    Name: StringProperty
    Path: StringProperty
    Type: (string | "SHARED" | "LOCAL")
  }[]
  OsFamily: (string | "WINDOWS" | "LINUX" | "MACOS")
  StorageProfileId?: StringProperty
}

export const AWSDeadlineStorageProfile = ({
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
      Type: 'AWS::Deadline::StorageProfile',
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