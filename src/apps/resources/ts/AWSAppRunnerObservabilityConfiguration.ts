import {StringProperty} from "../StringProperty"


type Properties = {
  ObservabilityConfigurationArn?: StringProperty
  ObservabilityConfigurationName?: StringProperty
  ObservabilityConfigurationRevision?: number
  Latest?: boolean
  TraceConfiguration?: {
    Vendor: (string | "AWSXRAY")
  }
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSAppRunnerObservabilityConfiguration = ({
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
      Type: 'AWS::AppRunner::ObservabilityConfiguration',
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