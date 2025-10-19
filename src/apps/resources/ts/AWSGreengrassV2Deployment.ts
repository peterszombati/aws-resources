import {StringProperty} from "../StringProperty"


type Properties = {
  TargetArn: StringProperty
  ParentTargetArn?: StringProperty
  DeploymentId?: StringProperty
  DeploymentName?: StringProperty
  Components?: Record<string, any>
  IotJobConfiguration?: {
    JobExecutionsRolloutConfig?: {
      ExponentialRate?: {
        BaseRatePerMinute: number
        IncrementFactor: number
        RateIncreaseCriteria: Record<string, any>
      }
      MaximumPerMinute?: number
    }
    AbortConfig?: {
      CriteriaList: {
        FailureType: (string | "FAILED" | "REJECTED" | "TIMED_OUT" | "ALL")
        Action: (string | "CANCEL")
        ThresholdPercentage: number
        MinNumberOfExecutedThings: number
      }[]
    }
    TimeoutConfig?: {
      InProgressTimeoutInMinutes?: number
    }
  }
  DeploymentPolicies?: {
    FailureHandlingPolicy?: (string | "ROLLBACK" | "DO_NOTHING")
    ComponentUpdatePolicy?: {
      TimeoutInSeconds?: number
      Action?: (string | "NOTIFY_COMPONENTS" | "SKIP_NOTIFY_COMPONENTS")
    }
    ConfigurationValidationPolicy?: {
      TimeoutInSeconds?: number
    }
  }
  Tags?: Record<string, any>
}

export const AWSGreengrassV2Deployment = ({
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
      Type: 'AWS::GreengrassV2::Deployment',
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