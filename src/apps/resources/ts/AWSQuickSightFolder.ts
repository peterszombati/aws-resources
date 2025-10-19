import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AwsAccountId?: StringProperty
  CreatedTime?: StringProperty
  FolderId?: StringProperty
  FolderType?: (string | "SHARED" | "RESTRICTED")
  LastUpdatedTime?: StringProperty
  Name?: StringProperty
  ParentFolderArn?: StringProperty
  Permissions?: {
    Principal: StringProperty
    Actions: StringProperty[]
  }[]
  SharingModel?: (string | "ACCOUNT" | "NAMESPACE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSQuickSightFolder = ({
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
      Type: 'AWS::QuickSight::Folder',
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