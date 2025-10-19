import {StringProperty} from "../StringProperty"


type Properties = {
  QueueUrl?: StringProperty
  Arn?: StringProperty
  ContentBasedDeduplication?: boolean
  DeduplicationScope?: StringProperty
  DelaySeconds?: number
  FifoQueue?: boolean
  FifoThroughputLimit?: StringProperty
  KmsDataKeyReusePeriodSeconds?: number
  KmsMasterKeyId?: StringProperty
  SqsManagedSseEnabled?: boolean
  MaximumMessageSize?: number
  MessageRetentionPeriod?: number
  QueueName?: StringProperty
  ReceiveMessageWaitTimeSeconds?: number
  RedriveAllowPolicy?: Record<string, any> | StringProperty
  RedrivePolicy?: Record<string, any> | StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VisibilityTimeout?: number
}

export const AWSSQSQueue = ({
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
      Type: 'AWS::SQS::Queue',
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