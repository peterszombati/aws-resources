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

export const AWSMediaLiveEventBridgeRuleTemplateGroup = ({
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
      Type: 'AWS::MediaLive::EventBridgeRuleTemplateGroup',
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