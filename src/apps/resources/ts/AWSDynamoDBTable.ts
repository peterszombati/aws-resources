import {StringProperty} from "../StringProperty"


type Properties = {
  OnDemandThroughput?: {
    MaxReadRequestUnits?: number
    MaxWriteRequestUnits?: number
  }
  SSESpecification?: {
    SSEEnabled: boolean
    SSEType?: StringProperty
    KMSMasterKeyId?: StringProperty
  }
  KinesisStreamSpecification?: {
    ApproximateCreationDateTimePrecision?: (string | "MICROSECOND" | "MILLISECOND")
    StreamArn: StringProperty
  }
  StreamSpecification?: {
    StreamViewType: StringProperty
    ResourcePolicy?: {
      PolicyDocument: Record<string, any>
    }
  }
  ContributorInsightsSpecification?: {
    Mode?: (string | "ACCESSED_AND_THROTTLED_KEYS" | "THROTTLED_KEYS")
    Enabled: boolean
  }
  ImportSourceSpecification?: {
    S3BucketSource: {
      S3Bucket: StringProperty
      S3KeyPrefix?: StringProperty
      S3BucketOwner?: StringProperty
    }
    InputFormat: StringProperty
    InputFormatOptions?: {
      Csv?: {
        Delimiter?: StringProperty
        HeaderList?: StringProperty[]
      }
    }
    InputCompressionType?: StringProperty
  }
  PointInTimeRecoverySpecification?: {
    PointInTimeRecoveryEnabled?: boolean
    RecoveryPeriodInDays?: number
  }
  ProvisionedThroughput?: {
    WriteCapacityUnits: number
    ReadCapacityUnits: number
  }
  WarmThroughput?: {
    ReadUnitsPerSecond?: number
    WriteUnitsPerSecond?: number
  }
  TableName?: StringProperty
  AttributeDefinitions?: {
    AttributeType: StringProperty
    AttributeName: StringProperty
  }[]
  GlobalSecondaryIndexes?: {
    IndexName: StringProperty
    OnDemandThroughput?: {
      MaxReadRequestUnits?: number
      MaxWriteRequestUnits?: number
    }
    ContributorInsightsSpecification?: {
      Mode?: (string | "ACCESSED_AND_THROTTLED_KEYS" | "THROTTLED_KEYS")
      Enabled: boolean
    }
    Projection: {
      NonKeyAttributes?: StringProperty[]
      ProjectionType?: StringProperty
    }
    ProvisionedThroughput?: {
      WriteCapacityUnits: number
      ReadCapacityUnits: number
    }
    KeySchema: {
      KeyType: StringProperty
      AttributeName: StringProperty
    }[]
    WarmThroughput?: {
      ReadUnitsPerSecond?: number
      WriteUnitsPerSecond?: number
    }
  }[]
  BillingMode?: StringProperty
  ResourcePolicy?: {
    PolicyDocument: Record<string, any>
  }
  LocalSecondaryIndexes?: {
    IndexName: StringProperty
    Projection: {
      NonKeyAttributes?: StringProperty[]
      ProjectionType?: StringProperty
    }
    KeySchema: {
      KeyType: StringProperty
      AttributeName: StringProperty
    }[]
  }[]
  KeySchema: any
  Arn?: StringProperty
  StreamArn?: StringProperty
  DeletionProtectionEnabled?: boolean
  TableClass?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  TimeToLiveSpecification?: {
    Enabled: boolean
    AttributeName?: StringProperty
  }
}

export const AWSDynamoDBTable = ({
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
      Type: 'AWS::DynamoDB::Table',
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