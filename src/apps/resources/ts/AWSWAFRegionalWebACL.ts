import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  MetricName: StringProperty
  DefaultAction: {
    Type: StringProperty
  }
  Rules?: {
    Action: {
      Type: StringProperty
    }
    Priority: number
    RuleId: StringProperty
  }[]
  Name: StringProperty
}

export const AWSWAFRegionalWebACL = ({
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
      Type: 'AWS::WAFRegional::WebACL',
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