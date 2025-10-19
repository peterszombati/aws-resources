import {StringProperty} from "../StringProperty"


type Properties = {
  ReferenceDataSource: {
    ReferenceSchema: {
      RecordEncoding?: StringProperty
      RecordColumns: {
        Mapping?: StringProperty
        SqlType: StringProperty
        Name: StringProperty
      }[]
      RecordFormat: {
        RecordFormatType: StringProperty
        MappingParameters?: {
          CSVMappingParameters?: {
            RecordColumnDelimiter: StringProperty
            RecordRowDelimiter: StringProperty
          }
          JSONMappingParameters?: {
            RecordRowPath: StringProperty
          }
        }
      }
    }
    TableName?: StringProperty
    S3ReferenceDataSource?: {
      BucketARN: StringProperty
      FileKey: StringProperty
      ReferenceRoleARN: StringProperty
    }
  }
  ApplicationName: StringProperty
  Id?: StringProperty
}

export const AWSKinesisAnalyticsApplicationReferenceDataSource = ({
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
      Type: 'AWS::KinesisAnalytics::ApplicationReferenceDataSource',
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