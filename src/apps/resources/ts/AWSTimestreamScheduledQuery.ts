import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ScheduledQueryName?: StringProperty
  QueryString: StringProperty
  ScheduleConfiguration: {
    ScheduleExpression: StringProperty
  }
  NotificationConfiguration: {
    SnsConfiguration: {
      TopicArn: StringProperty
    }
  }
  ClientToken?: StringProperty
  ScheduledQueryExecutionRoleArn: StringProperty
  TargetConfiguration?: {
    TimestreamConfiguration: {
      DatabaseName: StringProperty
      TableName: StringProperty
      TimeColumn: StringProperty
      DimensionMappings: {
        Name: StringProperty
        DimensionValueType: (string | "VARCHAR")
      }[]
      MultiMeasureMappings?: {
        TargetMultiMeasureName?: StringProperty
        MultiMeasureAttributeMappings: {
          SourceColumn: StringProperty
          MeasureValueType: (string | "BIGINT" | "BOOLEAN" | "DOUBLE" | "VARCHAR" | "TIMESTAMP")
          TargetMultiMeasureAttributeName?: StringProperty
        }[]
      }
      MixedMeasureMappings?: {
        MeasureName?: StringProperty
        SourceColumn?: StringProperty
        TargetMeasureName?: StringProperty
        MeasureValueType: (string | "BIGINT" | "BOOLEAN" | "DOUBLE" | "VARCHAR" | "MULTI")
        MultiMeasureAttributeMappings?: {
          SourceColumn: StringProperty
          MeasureValueType: (string | "BIGINT" | "BOOLEAN" | "DOUBLE" | "VARCHAR" | "TIMESTAMP")
          TargetMultiMeasureAttributeName?: StringProperty
        }[]
      }[]
      MeasureNameColumn?: StringProperty
    }
  }
  ErrorReportConfiguration: {
    S3Configuration: {
      BucketName: StringProperty
      ObjectKeyPrefix?: StringProperty
      EncryptionOption?: (string | "SSE_S3" | "SSE_KMS")
    }
  }
  KmsKeyId?: StringProperty
  SQName?: StringProperty
  SQQueryString?: StringProperty
  SQScheduleConfiguration?: StringProperty
  SQNotificationConfiguration?: StringProperty
  SQScheduledQueryExecutionRoleArn?: StringProperty
  SQTargetConfiguration?: StringProperty
  SQErrorReportConfiguration?: StringProperty
  SQKmsKeyId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSTimestreamScheduledQuery = ({
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
      Type: 'AWS::Timestream::ScheduledQuery',
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