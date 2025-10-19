import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  MetricName: StringProperty
  Name: StringProperty
  Predicates?: {
    DataId: StringProperty
    Negated: boolean
    Type: StringProperty
  }[]
}

export const AWSWAFRule = ({
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
      Type: 'AWS::WAF::Rule',
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