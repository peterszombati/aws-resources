import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  MetricName: StringProperty
  Predicates?: {
    Type: StringProperty
    DataId: StringProperty
    Negated: boolean
  }[]
  Name: StringProperty
}

export const AWSWAFRegionalRule = ({
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
      Type: 'AWS::WAFRegional::Rule',
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