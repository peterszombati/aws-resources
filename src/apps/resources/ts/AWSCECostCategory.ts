import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  EffectiveStart?: StringProperty
  Name: StringProperty
  RuleVersion: (string | "CostCategoryExpression.v1")
  Rules: StringProperty
  SplitChargeRules?: StringProperty
  DefaultValue?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCECostCategory = ({
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
      Type: 'AWS::CE::CostCategory',
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