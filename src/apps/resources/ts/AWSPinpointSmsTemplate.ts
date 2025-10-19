import {StringProperty} from "../StringProperty"


type Properties = {
  TemplateName: StringProperty
  TemplateDescription?: StringProperty
  DefaultSubstitutions?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Body: StringProperty
  Tags?: Record<string, any>
}

export const AWSPinpointSmsTemplate = ({
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
      Type: 'AWS::Pinpoint::SmsTemplate',
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