import {StringProperty} from "../StringProperty"


type Properties = {
  HtmlPart?: StringProperty
  TextPart?: StringProperty
  TemplateName: StringProperty
  TemplateDescription?: StringProperty
  DefaultSubstitutions?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Subject: StringProperty
  Tags?: Record<string, any>
}

export const AWSPinpointEmailTemplate = ({
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
      Type: 'AWS::Pinpoint::EmailTemplate',
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