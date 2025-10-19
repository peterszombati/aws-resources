import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  TargetArn: StringProperty
  Rules: {
    Name: StringProperty
    Disabled?: boolean
    CheckExpression: StringProperty
    SubstitutionMap?: {
      ValueReference: StringProperty
      Value: StringProperty
    }[]
    Threshold?: {
      Value: number
      Type?: (string | "GREATER_THAN_OR_EQUAL" | "LESS_THAN_OR_EQUAL" | "GREATER_THAN" | "LESS_THAN")
      Unit?: (string | "COUNT" | "PERCENTAGE")
    }
    ColumnSelectors?: {
      Regex?: StringProperty
      Name?: StringProperty
    }[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDataBrewRuleset = ({
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
      Type: 'AWS::DataBrew::Ruleset',
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