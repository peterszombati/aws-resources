import {StringProperty} from "../StringProperty"


type Properties = {
  DeploymentConfig?: {
    AutoRollbackConfiguration?: {
      Alarms: {
        AlarmName: StringProperty
      }[]
    }
    BlueGreenUpdatePolicy?: {
      MaximumExecutionTimeoutInSeconds?: number
      TerminationWaitInSeconds?: number
      TrafficRoutingConfiguration: {
        CanarySize?: {
          Type: StringProperty
          Value: number
        }
        LinearStepSize?: {
          Type: StringProperty
          Value: number
        }
        Type: StringProperty
        WaitIntervalInSeconds?: number
      }
    }
    RollingUpdatePolicy?: {
      MaximumBatchSize: {
        Type: StringProperty
        Value: number
      }
      MaximumExecutionTimeoutInSeconds?: number
      RollbackMaximumBatchSize?: {
        Type: StringProperty
        Value: number
      }
      WaitIntervalInSeconds: number
    }
  }
  EndpointArn?: StringProperty
  EndpointConfigName: StringProperty
  EndpointName?: StringProperty
  ExcludeRetainedVariantProperties?: {
    VariantPropertyType?: StringProperty
  }[]
  RetainAllVariantProperties?: boolean
  RetainDeploymentConfig?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSageMakerEndpoint = ({
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
      Type: 'AWS::SageMaker::Endpoint',
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