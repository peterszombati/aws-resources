import {StringProperty} from "../StringProperty"


type Properties = {
  FunctionArn?: StringProperty
  FunctionName: StringProperty
  ProvisionedConcurrencyConfig?: {
    ProvisionedConcurrentExecutions: number
  }
  Description?: StringProperty
  RuntimePolicy?: {
    UpdateRuntimeOn: StringProperty
    RuntimeVersionArn?: StringProperty
  }
  Version?: StringProperty
  CodeSha256?: StringProperty
}

export const AWSLambdaVersion = ({
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
      Type: 'AWS::Lambda::Version',
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