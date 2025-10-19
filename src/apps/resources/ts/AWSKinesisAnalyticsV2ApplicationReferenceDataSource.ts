import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ApplicationName: StringProperty
  ReferenceDataSource: {
    ReferenceSchema: {
      RecordEncoding?: StringProperty
      RecordColumns: {
        Mapping?: StringProperty
        SqlType: StringProperty
        Name: StringProperty
      }[]
      RecordFormat: {
        MappingParameters?: {
          JSONMappingParameters?: {
            RecordRowPath: StringProperty
          }
          CSVMappingParameters?: {
            RecordRowDelimiter: StringProperty
            RecordColumnDelimiter: StringProperty
          }
        }
        RecordFormatType: StringProperty
      }
    }
    TableName?: StringProperty
    S3ReferenceDataSource?: {
      BucketARN: StringProperty
      FileKey: StringProperty
    }
  }
}

export const AWSKinesisAnalyticsV2ApplicationReferenceDataSource = ({
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
      Type: 'AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource',
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