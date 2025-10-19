import {StringProperty} from "../StringProperty"


type Properties = {
  TargetVersion?: StringProperty
  ExecutionControls?: {
    SsmControls?: {
      ErrorPercentage?: number
      ConcurrentExecutionRatePercentage?: number
    }
  }
  Parameters?: Record<string, any>
  TargetType: StringProperty
  ConfigRuleName: StringProperty
  ResourceType?: StringProperty
  RetryAttemptSeconds?: number
  MaximumAutomaticAttempts?: number
  Id?: StringProperty
  TargetId: StringProperty
  Automatic?: boolean
}

export const AWSConfigRemediationConfiguration = ({
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
      Type: 'AWS::Config::RemediationConfiguration',
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