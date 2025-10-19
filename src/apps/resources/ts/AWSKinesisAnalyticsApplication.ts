import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationName?: StringProperty
  Id?: StringProperty
  Inputs: {
    NamePrefix: StringProperty
    InputSchema: {
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
    KinesisStreamsInput?: {
      ResourceARN: StringProperty
      RoleARN: StringProperty
    }
    KinesisFirehoseInput?: {
      ResourceARN: StringProperty
      RoleARN: StringProperty
    }
    InputProcessingConfiguration?: {
      InputLambdaProcessor?: {
        ResourceARN: StringProperty
        RoleARN: StringProperty
      }
    }
    InputParallelism?: {
      Count?: number
    }
  }[]
  ApplicationDescription?: StringProperty
  ApplicationCode?: StringProperty
}

export const AWSKinesisAnalyticsApplication = ({
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
      Type: 'AWS::KinesisAnalytics::Application',
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