import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Template?: {
    TemplateName?: StringProperty
    SubjectPart: StringProperty
    TextPart?: StringProperty
    HtmlPart?: StringProperty
  }
}

export const AWSSESTemplate = ({
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
      Type: 'AWS::SES::Template',
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