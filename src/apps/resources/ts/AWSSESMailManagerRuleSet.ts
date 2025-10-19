import {StringProperty} from "../StringProperty"


type Properties = {
  RuleSetArn?: StringProperty
  RuleSetId?: StringProperty
  RuleSetName?: StringProperty
  Rules: {
    Name?: StringProperty
    Conditions?: any[]
    Unless?: any[]
    Actions: any[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSESMailManagerRuleSet = ({
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
      Type: 'AWS::SES::MailManagerRuleSet',
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