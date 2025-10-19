import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  MetricName: StringProperty
  RateLimit: number
  MatchPredicates?: {
    Type: StringProperty
    DataId: StringProperty
    Negated: boolean
  }[]
  RateKey: StringProperty
  Name: StringProperty
}

export const AWSWAFRegionalRateBasedRule = ({
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
      Type: 'AWS::WAFRegional::RateBasedRule',
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