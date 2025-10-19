import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  DesiredShardLevelMetrics?: (string | "IncomingBytes" | "IncomingRecords" | "OutgoingBytes" | "OutgoingRecords" | "WriteProvisionedThroughputExceeded" | "ReadProvisionedThroughputExceeded" | "IteratorAgeMilliseconds" | "ALL")[]
  RetentionPeriodHours?: number
  ShardCount?: number
  StreamModeDetails?: {
    StreamMode: (string | "ON_DEMAND" | "PROVISIONED")
  }
  StreamEncryption?: {
    EncryptionType: (string | "KMS")
    KeyId: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSKinesisStream = ({
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
      Type: 'AWS::Kinesis::Stream',
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