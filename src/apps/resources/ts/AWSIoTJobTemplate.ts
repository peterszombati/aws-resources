import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  JobArn?: StringProperty
  JobTemplateId: StringProperty
  Description: StringProperty
  Document?: StringProperty
  DocumentSource?: StringProperty
  TimeoutConfig?: {
    InProgressTimeoutInMinutes: number
  }
  JobExecutionsRolloutConfig?: {
    ExponentialRolloutRate?: {
      BaseRatePerMinute: number
      IncrementFactor: number
      RateIncreaseCriteria: {
        NumberOfNotifiedThings?: number
        NumberOfSucceededThings?: number
      }
    }
    MaximumPerMinute?: number
  }
  AbortConfig?: {
    CriteriaList: {
      Action: (string | "CANCEL")
      FailureType: (string | "FAILED" | "REJECTED" | "TIMED_OUT" | "ALL")
      MinNumberOfExecutedThings: number
      ThresholdPercentage: number
    }[]
  }
  PresignedUrlConfig?: {
    RoleArn: StringProperty
    ExpiresInSec?: number
  }
  JobExecutionsRetryConfig?: {
    RetryCriteriaList?: {
      NumberOfRetries?: number
      FailureType?: (string | "FAILED" | "TIMED_OUT" | "ALL")
    }[]
  }
  MaintenanceWindows?: {
    StartTime?: StringProperty
    DurationInMinutes?: number
  }[]
  DestinationPackageVersions?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTJobTemplate = ({
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
      Type: 'AWS::IoT::JobTemplate',
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