import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedAt?: StringProperty
  Description?: StringProperty
  Id?: StringProperty
  Identifier?: StringProperty
  ModifiedAt?: StringProperty
  Name: StringProperty
  Tags?: Record<string, any>
}

export const AWSMediaLiveCloudWatchAlarmTemplateGroup = ({
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
      Type: 'AWS::MediaLive::CloudWatchAlarmTemplateGroup',
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