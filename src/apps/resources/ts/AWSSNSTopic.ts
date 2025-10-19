import {StringProperty} from "../StringProperty"


type Properties = {
  DisplayName?: StringProperty
  KmsMasterKeyId?: StringProperty
  DataProtectionPolicy?: Record<string, any>
  Subscription?: {
    Endpoint: StringProperty
    Protocol: StringProperty
  }[]
  FifoTopic?: boolean
  ContentBasedDeduplication?: boolean
  ArchivePolicy?: Record<string, any>
  FifoThroughputScope?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TopicName?: StringProperty
  TopicArn?: StringProperty
  SignatureVersion?: StringProperty
  TracingConfig?: StringProperty
  DeliveryStatusLogging?: {
    Protocol: (string | "http/s" | "sqs" | "lambda" | "firehose" | "application")
    SuccessFeedbackRoleArn?: StringProperty
    SuccessFeedbackSampleRate?: StringProperty
    FailureFeedbackRoleArn?: StringProperty
  }[]
}

export const AWSSNSTopic = ({
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
      Type: 'AWS::SNS::Topic',
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