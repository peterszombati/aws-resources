import {StringProperty} from "../StringProperty"


type Properties = {
  DestinationConfig?: {
    OnFailure?: {
      Destination: StringProperty
    }
    OnSuccess?: {
      Destination: StringProperty
    }
  }
  FunctionName: StringProperty
  MaximumEventAgeInSeconds?: number
  MaximumRetryAttempts?: number
  Qualifier: StringProperty
}

export const AWSLambdaEventInvokeConfig = ({
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
      Type: 'AWS::Lambda::EventInvokeConfig',
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