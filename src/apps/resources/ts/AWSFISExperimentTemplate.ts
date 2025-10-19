import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Description: StringProperty
  Targets: Record<string, any>
  Actions?: Record<string, any>
  StopConditions: {
    Source: StringProperty
    Value?: StringProperty
  }[]
  LogConfiguration?: {
    CloudWatchLogsConfiguration?: {
      LogGroupArn: StringProperty
    }
    S3Configuration?: {
      BucketName: StringProperty
      Prefix?: StringProperty
    }
    LogSchemaVersion: number
  }
  RoleArn: StringProperty
  Tags?: Record<string, any>
  ExperimentOptions?: {
    AccountTargeting?: (string | "multi-account" | "single-account")
    EmptyTargetResolutionMode?: (string | "fail" | "skip")
  }
  ExperimentReportConfiguration?: {
    Outputs: {
      ExperimentReportS3Configuration: {
        BucketName: StringProperty
        Prefix?: StringProperty
      }
    }
    DataSources?: {
      CloudWatchDashboards?: {
        DashboardIdentifier: StringProperty
      }[]
    }
    PreExperimentDuration?: StringProperty
    PostExperimentDuration?: StringProperty
  }
}

export const AWSFISExperimentTemplate = ({
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
      Type: 'AWS::FIS::ExperimentTemplate',
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