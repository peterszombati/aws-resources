import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  ResourceType: (string | "CHAT_TRANSCRIPTS" | "CALL_RECORDINGS" | "SCHEDULED_REPORTS" | "MEDIA_STREAMS" | "CONTACT_TRACE_RECORDS" | "AGENT_EVENTS")
  AssociationId?: StringProperty
  StorageType: (string | "S3" | "KINESIS_VIDEO_STREAM" | "KINESIS_STREAM" | "KINESIS_FIREHOSE")
  S3Config?: {
    BucketName: StringProperty
    BucketPrefix: StringProperty
    EncryptionConfig?: {
      EncryptionType: (string | "KMS")
      KeyId: StringProperty
    }
  }
  KinesisVideoStreamConfig?: {
    Prefix: StringProperty
    RetentionPeriodHours: number
    EncryptionConfig: {
      EncryptionType: (string | "KMS")
      KeyId: StringProperty
    }
  }
  KinesisStreamConfig?: {
    StreamArn: StringProperty
  }
  KinesisFirehoseConfig?: {
    FirehoseArn: StringProperty
  }
}

export const AWSConnectInstanceStorageConfig = ({
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
      Type: 'AWS::Connect::InstanceStorageConfig',
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