import {StringProperty} from "../StringProperty"


type Properties = {
  WorkspaceId?: StringProperty
  Alias?: StringProperty
  Arn?: StringProperty
  AlertManagerDefinition?: StringProperty
  PrometheusEndpoint?: StringProperty
  LoggingConfiguration?: {
    LogGroupArn?: StringProperty
  }
  WorkspaceConfiguration?: {
    RetentionPeriodInDays?: number
    LimitsPerLabelSets?: {
      Limits: {
        MaxSeries?: number
      }
      LabelSet: {
        Name: StringProperty
        Value: StringProperty
      }[]
    }[]
  }
  QueryLoggingConfiguration?: {
    Destinations: {
      CloudWatchLogs: {
        LogGroupArn: StringProperty
      }
      Filters: {
        QspThreshold: number
      }
    }[]
  }
  KmsKeyArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSAPSWorkspace = ({
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
      Type: 'AWS::APS::Workspace',
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