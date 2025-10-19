import {StringProperty} from "../StringProperty"


type Properties = {
  AutoScalingConfigurationArn?: StringProperty
  AutoScalingConfigurationName?: StringProperty
  AutoScalingConfigurationRevision?: number
  MaxConcurrency?: number
  MaxSize?: number
  MinSize?: number
  Latest?: boolean
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSAppRunnerAutoScalingConfiguration = ({
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
      Type: 'AWS::AppRunner::AutoScalingConfiguration',
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