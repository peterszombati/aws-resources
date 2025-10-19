import {StringProperty} from "../StringProperty"


type Properties = {
  DetectorModelDefinition: {
    InitialStateName: StringProperty
    States: {
      OnEnter?: {
        Events?: {
          Actions?: {
            ClearTimer?: {
              TimerName: StringProperty
            }
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
              PropertyValue: {
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
            ResetTimer?: {
              TimerName: StringProperty
            }
            SetTimer?: {
              DurationExpression?: StringProperty
              Seconds?: number
              TimerName: StringProperty
            }
            SetVariable?: {
              Value: StringProperty
              VariableName: StringProperty
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
          Condition?: StringProperty
          EventName: StringProperty
        }[]
      }
      OnExit?: {
        Events?: {
          Actions?: {
            ClearTimer?: {
              TimerName: StringProperty
            }
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
              PropertyValue: {
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
            ResetTimer?: {
              TimerName: StringProperty
            }
            SetTimer?: {
              DurationExpression?: StringProperty
              Seconds?: number
              TimerName: StringProperty
            }
            SetVariable?: {
              Value: StringProperty
              VariableName: StringProperty
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
          Condition?: StringProperty
          EventName: StringProperty
        }[]
      }
      OnInput?: {
        Events?: {
          Actions?: {
            ClearTimer?: {
              TimerName: StringProperty
            }
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
              PropertyValue: {
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
            ResetTimer?: {
              TimerName: StringProperty
            }
            SetTimer?: {
              DurationExpression?: StringProperty
              Seconds?: number
              TimerName: StringProperty
            }
            SetVariable?: {
              Value: StringProperty
              VariableName: StringProperty
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
          Condition?: StringProperty
          EventName: StringProperty
        }[]
        TransitionEvents?: {
          Actions?: {
            ClearTimer?: {
              TimerName: StringProperty
            }
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
              PropertyValue: {
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
            ResetTimer?: {
              TimerName: StringProperty
            }
            SetTimer?: {
              DurationExpression?: StringProperty
              Seconds?: number
              TimerName: StringProperty
            }
            SetVariable?: {
              Value: StringProperty
              VariableName: StringProperty
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
          Condition: StringProperty
          EventName: StringProperty
          NextState: StringProperty
        }[]
      }
      StateName: StringProperty
    }[]
  }
  DetectorModelDescription?: StringProperty
  DetectorModelName?: StringProperty
  EvaluationMethod?: (string | "BATCH" | "SERIAL")
  Key?: StringProperty
  RoleArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTEventsDetectorModel = ({
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
      Type: 'AWS::IoTEvents::DetectorModel',
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