import {StringProperty} from "../StringProperty"


type Properties = {
  CalculatorArn?: StringProperty
  CalculatorName: StringProperty
  CreateTime?: StringProperty
  DataSource: StringProperty
  Description?: StringProperty
  PricingPlan?: (string | "RequestBasedUsage")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UpdateTime?: StringProperty
  Arn?: StringProperty
}

export const AWSLocationRouteCalculator = ({
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
      Type: 'AWS::Location::RouteCalculator',
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