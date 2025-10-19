import {StringProperty} from "../StringProperty"


type Properties = {
  Group: StringProperty
  GroupArn?: StringProperty
  GroupName?: StringProperty
  TaskArn?: StringProperty
  TagKey: StringProperty
  TagValue: StringProperty
  RoleArn: StringProperty
  Status?: (string | "ACTIVE" | "ERROR")
}

export const AWSResourceGroupsTagSyncTask = ({
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
      Type: 'AWS::ResourceGroups::TagSyncTask',
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