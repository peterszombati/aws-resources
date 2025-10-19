import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  RuleName?: StringProperty
  TopicRulePayload: {
    RuleDisabled?: boolean
    ErrorAction?: {
      CloudwatchAlarm?: {
        StateValue: StringProperty
        AlarmName: StringProperty
        StateReason: StringProperty
        RoleArn: StringProperty
      }
      CloudwatchLogs?: {
        LogGroupName: StringProperty
        RoleArn: StringProperty
        BatchMode?: boolean
      }
      CloudwatchMetric?: {
        MetricName: StringProperty
        MetricValue: StringProperty
        MetricNamespace: StringProperty
        MetricUnit: StringProperty
        RoleArn: StringProperty
        MetricTimestamp?: StringProperty
      }
      DynamoDB?: {
        TableName: StringProperty
        PayloadField?: StringProperty
        RangeKeyField?: StringProperty
        HashKeyField: StringProperty
        RangeKeyValue?: StringProperty
        RangeKeyType?: StringProperty
        HashKeyType?: StringProperty
        HashKeyValue: StringProperty
        RoleArn: StringProperty
      }
      DynamoDBv2?: {
        PutItem?: {
          TableName: StringProperty
        }
        RoleArn?: StringProperty
      }
      Elasticsearch?: {
        Type: StringProperty
        Index: StringProperty
        Id: StringProperty
        Endpoint: StringProperty
        RoleArn: StringProperty
      }
      Firehose?: {
        DeliveryStreamName: StringProperty
        RoleArn: StringProperty
        Separator?: StringProperty
        BatchMode?: boolean
      }
      Http?: {
        ConfirmationUrl?: StringProperty
        Headers?: {
          Value: StringProperty
          Key: StringProperty
        }[]
        Url: StringProperty
        Auth?: {
          Sigv4?: {
            ServiceName: StringProperty
            SigningRegion: StringProperty
            RoleArn: StringProperty
          }
        }
      }
      IotAnalytics?: {
        RoleArn: StringProperty
        ChannelName: StringProperty
        BatchMode?: boolean
      }
      IotEvents?: {
        InputName: StringProperty
        RoleArn: StringProperty
        MessageId?: StringProperty
        BatchMode?: boolean
      }
      IotSiteWise?: {
        RoleArn: StringProperty
        PutAssetPropertyValueEntries: {
          PropertyAlias?: StringProperty
          PropertyValues: {
            Value: {
              StringValue?: StringProperty
              DoubleValue?: StringProperty
              BooleanValue?: StringProperty
              IntegerValue?: StringProperty
            }
            Timestamp: {
              TimeInSeconds: StringProperty
              OffsetInNanos?: StringProperty
            }
            Quality?: StringProperty
          }[]
          AssetId?: StringProperty
          EntryId?: StringProperty
          PropertyId?: StringProperty
        }[]
      }
      Kafka?: {
        DestinationArn: StringProperty
        Topic: StringProperty
        Key?: StringProperty
        Partition?: StringProperty
        ClientProperties: Record<string, any>
        Headers?: {
          Value: StringProperty
          Key: StringProperty
        }[]
      }
      Kinesis?: {
        PartitionKey?: StringProperty
        StreamName: StringProperty
        RoleArn: StringProperty
      }
      Lambda?: {
        FunctionArn?: StringProperty
      }
      Location?: {
        RoleArn: StringProperty
        TrackerName: StringProperty
        DeviceId: StringProperty
        Latitude: StringProperty
        Longitude: StringProperty
        Timestamp?: {
          Value: StringProperty
          Unit?: StringProperty
        }
      }
      OpenSearch?: {
        Type: StringProperty
        Index: StringProperty
        Id: StringProperty
        Endpoint: StringProperty
        RoleArn: StringProperty
      }
      Republish?: {
        Qos?: number
        Topic: StringProperty
        RoleArn: StringProperty
        Headers?: {
          PayloadFormatIndicator?: StringProperty
          ContentType?: StringProperty
          ResponseTopic?: StringProperty
          CorrelationData?: StringProperty
          MessageExpiry?: StringProperty
          UserProperties?: {
            Key: StringProperty
            Value: StringProperty
          }[]
        }
      }
      S3?: {
        BucketName: StringProperty
        Key: StringProperty
        RoleArn: StringProperty
        CannedAcl?: (string | "private" | "public-read" | "public-read-write" | "aws-exec-read" | "authenticated-read" | "bucket-owner-read" | "bucket-owner-full-control" | "log-delivery-write")
      }
      Sns?: {
        TargetArn: StringProperty
        MessageFormat?: StringProperty
        RoleArn: StringProperty
      }
      Sqs?: {
        RoleArn: StringProperty
        UseBase64?: boolean
        QueueUrl: StringProperty
      }
      StepFunctions?: {
        ExecutionNamePrefix?: StringProperty
        StateMachineName: StringProperty
        RoleArn: StringProperty
      }
      Timestream?: {
        RoleArn: StringProperty
        DatabaseName: StringProperty
        TableName: StringProperty
        Dimensions: {
          Name: StringProperty
          Value: StringProperty
        }[]
        Timestamp?: {
          Value: StringProperty
          Unit: StringProperty
        }
      }
    }
    Description?: StringProperty
    AwsIotSqlVersion?: StringProperty
    Actions: {
      CloudwatchAlarm?: {
        StateValue: StringProperty
        AlarmName: StringProperty
        StateReason: StringProperty
        RoleArn: StringProperty
      }
      CloudwatchLogs?: {
        LogGroupName: StringProperty
        RoleArn: StringProperty
        BatchMode?: boolean
      }
      CloudwatchMetric?: {
        MetricName: StringProperty
        MetricValue: StringProperty
        MetricNamespace: StringProperty
        MetricUnit: StringProperty
        RoleArn: StringProperty
        MetricTimestamp?: StringProperty
      }
      DynamoDB?: {
        TableName: StringProperty
        PayloadField?: StringProperty
        RangeKeyField?: StringProperty
        HashKeyField: StringProperty
        RangeKeyValue?: StringProperty
        RangeKeyType?: StringProperty
        HashKeyType?: StringProperty
        HashKeyValue: StringProperty
        RoleArn: StringProperty
      }
      DynamoDBv2?: {
        PutItem?: {
          TableName: StringProperty
        }
        RoleArn?: StringProperty
      }
      Elasticsearch?: {
        Type: StringProperty
        Index: StringProperty
        Id: StringProperty
        Endpoint: StringProperty
        RoleArn: StringProperty
      }
      Firehose?: {
        DeliveryStreamName: StringProperty
        RoleArn: StringProperty
        Separator?: StringProperty
        BatchMode?: boolean
      }
      Http?: {
        ConfirmationUrl?: StringProperty
        Headers?: {
          Value: StringProperty
          Key: StringProperty
        }[]
        Url: StringProperty
        Auth?: {
          Sigv4?: {
            ServiceName: StringProperty
            SigningRegion: StringProperty
            RoleArn: StringProperty
          }
        }
      }
      IotAnalytics?: {
        RoleArn: StringProperty
        ChannelName: StringProperty
        BatchMode?: boolean
      }
      IotEvents?: {
        InputName: StringProperty
        RoleArn: StringProperty
        MessageId?: StringProperty
        BatchMode?: boolean
      }
      IotSiteWise?: {
        RoleArn: StringProperty
        PutAssetPropertyValueEntries: {
          PropertyAlias?: StringProperty
          PropertyValues: {
            Value: {
              StringValue?: StringProperty
              DoubleValue?: StringProperty
              BooleanValue?: StringProperty
              IntegerValue?: StringProperty
            }
            Timestamp: {
              TimeInSeconds: StringProperty
              OffsetInNanos?: StringProperty
            }
            Quality?: StringProperty
          }[]
          AssetId?: StringProperty
          EntryId?: StringProperty
          PropertyId?: StringProperty
        }[]
      }
      Kafka?: {
        DestinationArn: StringProperty
        Topic: StringProperty
        Key?: StringProperty
        Partition?: StringProperty
        ClientProperties: Record<string, any>
        Headers?: {
          Value: StringProperty
          Key: StringProperty
        }[]
      }
      Kinesis?: {
        PartitionKey?: StringProperty
        StreamName: StringProperty
        RoleArn: StringProperty
      }
      Lambda?: {
        FunctionArn?: StringProperty
      }
      Location?: {
        RoleArn: StringProperty
        TrackerName: StringProperty
        DeviceId: StringProperty
        Latitude: StringProperty
        Longitude: StringProperty
        Timestamp?: {
          Value: StringProperty
          Unit?: StringProperty
        }
      }
      OpenSearch?: {
        Type: StringProperty
        Index: StringProperty
        Id: StringProperty
        Endpoint: StringProperty
        RoleArn: StringProperty
      }
      Republish?: {
        Qos?: number
        Topic: StringProperty
        RoleArn: StringProperty
        Headers?: {
          PayloadFormatIndicator?: StringProperty
          ContentType?: StringProperty
          ResponseTopic?: StringProperty
          CorrelationData?: StringProperty
          MessageExpiry?: StringProperty
          UserProperties?: {
            Key: StringProperty
            Value: StringProperty
          }[]
        }
      }
      S3?: {
        BucketName: StringProperty
        Key: StringProperty
        RoleArn: StringProperty
        CannedAcl?: (string | "private" | "public-read" | "public-read-write" | "aws-exec-read" | "authenticated-read" | "bucket-owner-read" | "bucket-owner-full-control" | "log-delivery-write")
      }
      Sns?: {
        TargetArn: StringProperty
        MessageFormat?: StringProperty
        RoleArn: StringProperty
      }
      Sqs?: {
        RoleArn: StringProperty
        UseBase64?: boolean
        QueueUrl: StringProperty
      }
      StepFunctions?: {
        ExecutionNamePrefix?: StringProperty
        StateMachineName: StringProperty
        RoleArn: StringProperty
      }
      Timestream?: {
        RoleArn: StringProperty
        DatabaseName: StringProperty
        TableName: StringProperty
        Dimensions: {
          Name: StringProperty
          Value: StringProperty
        }[]
        Timestamp?: {
          Value: StringProperty
          Unit: StringProperty
        }
      }
    }[]
    Sql: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTTopicRule = ({
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
      Type: 'AWS::IoT::TopicRule',
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