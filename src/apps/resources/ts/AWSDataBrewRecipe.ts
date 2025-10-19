import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Name: StringProperty
  Steps: {
    Action: {
      Operation: StringProperty
      Parameters?: any
    }
    ConditionExpressions?: {
      Condition: StringProperty
      Value?: StringProperty
      TargetColumn: StringProperty
    }[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDataBrewRecipe = ({
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
      Type: 'AWS::DataBrew::Recipe',
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