import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  DatabaseName: StringProperty
  TableName?: StringProperty
  RetentionProperties?: {
    MemoryStoreRetentionPeriodInHours?: StringProperty
    MagneticStoreRetentionPeriodInDays?: StringProperty
  }
  Schema?: {
    CompositePartitionKey?: {
      Type: (string | "DIMENSION" | "MEASURE")
      Name?: StringProperty
      EnforcementInRecord?: (string | "REQUIRED" | "OPTIONAL")
    }[]
  }
  MagneticStoreWriteProperties?: {
    EnableMagneticStoreWrites: boolean
    MagneticStoreRejectedDataLocation?: {
      S3Configuration?: {
        BucketName: StringProperty
        ObjectKeyPrefix?: StringProperty
        EncryptionOption: StringProperty
        KmsKeyId?: StringProperty
      }
    }
  }
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSTimestreamTable = ({
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
      Type: 'AWS::Timestream::Table',
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