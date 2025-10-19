import {StringProperty} from "../StringProperty"


type Properties = {
  DatastoreStorage?: {
    ServiceManagedS3?: Record<string, any>
    CustomerManagedS3?: {
      Bucket: StringProperty
      RoleArn: StringProperty
      KeyPrefix?: StringProperty
    }
    IotSiteWiseMultiLayerStorage?: {
      CustomerManagedS3Storage?: {
        Bucket: StringProperty
        KeyPrefix?: StringProperty
      }
    }
  }
  DatastoreName?: StringProperty
  DatastorePartitions?: {
    Partitions?: {
      Partition?: {
        AttributeName: StringProperty
      }
      TimestampPartition?: {
        AttributeName: StringProperty
        TimestampFormat?: StringProperty
      }
    }[]
  }
  Id?: StringProperty
  FileFormatConfiguration?: {
    JsonConfiguration?: Record<string, any>
    ParquetConfiguration?: {
      SchemaDefinition?: {
        Columns?: {
          Type: StringProperty
          Name: StringProperty
        }[]
      }
    }
  }
  RetentionPeriod?: {
    NumberOfDays?: number
    Unlimited?: boolean
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTAnalyticsDatastore = ({
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
      Type: 'AWS::IoTAnalytics::Datastore',
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