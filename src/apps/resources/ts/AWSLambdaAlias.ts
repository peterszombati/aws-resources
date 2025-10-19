import {StringProperty} from "../StringProperty"


type Properties = {
  FunctionName: StringProperty
  AliasArn?: StringProperty
  ProvisionedConcurrencyConfig?: {
    ProvisionedConcurrentExecutions: number
  }
  Description?: StringProperty
  FunctionVersion: StringProperty
  RoutingConfig?: {
    AdditionalVersionWeights?: {
      FunctionWeight: number
      FunctionVersion: StringProperty
    }[]
  }
  Name: StringProperty
}

export const AWSLambdaAlias = ({
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
      Type: 'AWS::Lambda::Alias',
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