import {StringProperty} from "../StringProperty"


type Properties = {
  AlarmModelName?: StringProperty
  AlarmModelDescription?: StringProperty
  RoleArn: StringProperty
  Key?: StringProperty
  Severity?: number
  AlarmRule: {
    SimpleRule?: {
      InputProperty: StringProperty
      ComparisonOperator: (string | "GREATER" | "GREATER_OR_EQUAL" | "LESS" | "LESS_OR_EQUAL" | "EQUAL" | "NOT_EQUAL")
      Threshold: StringProperty
    }
  }
  AlarmEventActions?: {
    AlarmActions?: {
      DynamoDB?: {
        HashKeyField: StringProperty
        HashKeyType?: StringProperty
        HashKeyValue: StringProperty
        Operation?: StringProperty
        Payload?: {
          ContentExpression: StringProperty
          Type: StringProperty
        }
        PayloadField?: StringProperty
        RangeKeyField?: StringProperty
        RangeKeyType?: StringProperty
        RangeKeyValue?: StringProperty
        TableName: StringProperty
      }
      DynamoDBv2?: {
        Payload?: {
          ContentExpression: StringProperty
          Type: StringProperty
        }
        TableName: StringProperty
      }
      Firehose?: {
        DeliveryStreamName: StringProperty
        Payload?: {
          ContentExpression: StringProperty
          Type: StringProperty
        }
        Separator?: StringProperty
      }
      IotEvents?: {
        InputName: StringProperty
        Payload?: {
          ContentExpression: StringProperty
          Type: StringProperty
        }
      }
      IotSiteWise?: {
        AssetId?: StringProperty
        EntryId?: StringProperty
        PropertyAlias?: StringProperty
        PropertyId?: StringProperty
        PropertyValue?: {
          Quality?: StringProperty
          Timestamp?: {
            OffsetInNanos?: StringProperty
            TimeInSeconds: StringProperty
          }
          Value: {
            BooleanValue?: StringProperty
            DoubleValue?: StringProperty
            IntegerValue?: StringProperty
            StringValue?: StringProperty
          }
        }
      }
      IotTopicPublish?: {
        MqttTopic: StringProperty
        Payload?: {
          ContentExpression: StringProperty
          Type: StringProperty
        }
      }
      Lambda?: {
        FunctionArn: StringProperty
        Payload?: {
          ContentExpression: StringProperty
          Type: StringProperty
        }
      }
      Sns?: {
        Payload?: {
          ContentExpression: StringProperty
          Type: StringProperty
        }
        TargetArn: StringProperty
      }
      Sqs?: {
        Payload?: {
          ContentExpression: StringProperty
          Type: StringProperty
        }
        QueueUrl: StringProperty
        UseBase64?: boolean
      }
    }[]
  }
  AlarmCapabilities?: {
    InitializationConfiguration?: {
      DisabledOnInitialization: boolean
    }
    AcknowledgeFlow?: {
      Enabled?: boolean
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTEventsAlarmModel = ({
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
      Type: 'AWS::IoTEvents::AlarmModel',
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