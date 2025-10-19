import {StringProperty} from "../StringProperty"


type Properties = {
  GCM?: {
    Action?: StringProperty
    ImageUrl?: StringProperty
    SmallImageIconUrl?: StringProperty
    Title?: StringProperty
    ImageIconUrl?: StringProperty
    Sound?: StringProperty
    Body?: StringProperty
    Url?: StringProperty
  }
  Baidu?: {
    Action?: StringProperty
    ImageUrl?: StringProperty
    SmallImageIconUrl?: StringProperty
    Title?: StringProperty
    ImageIconUrl?: StringProperty
    Sound?: StringProperty
    Body?: StringProperty
    Url?: StringProperty
  }
  TemplateName: StringProperty
  ADM?: {
    Action?: StringProperty
    ImageUrl?: StringProperty
    SmallImageIconUrl?: StringProperty
    Title?: StringProperty
    ImageIconUrl?: StringProperty
    Sound?: StringProperty
    Body?: StringProperty
    Url?: StringProperty
  }
  APNS?: {
    Action?: StringProperty
    MediaUrl?: StringProperty
    Title?: StringProperty
    Sound?: StringProperty
    Body?: StringProperty
    Url?: StringProperty
  }
  TemplateDescription?: StringProperty
  DefaultSubstitutions?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Default?: {
    Title?: StringProperty
    Action?: StringProperty
    Sound?: StringProperty
    Body?: StringProperty
    Url?: StringProperty
  }
  Tags?: Record<string, any>
}

export const AWSPinpointPushTemplate = ({
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
      Type: 'AWS::Pinpoint::PushTemplate',
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