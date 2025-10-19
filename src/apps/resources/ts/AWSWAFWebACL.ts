import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  DefaultAction: {
    Type: StringProperty
  }
  MetricName: StringProperty
  Name: StringProperty
  Rules?: {
    Action?: {
      Type: StringProperty
    }
    Priority: number
    RuleId: StringProperty
  }[]
}

export const AWSWAFWebACL = ({
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
      Type: 'AWS::WAF::WebACL',
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