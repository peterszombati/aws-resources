import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AnomalyDetectorName?: StringProperty
  AnomalyDetectorDescription?: StringProperty
  AnomalyDetectorConfig: {
    AnomalyDetectorFrequency: (string | "PT5M" | "PT10M" | "PT1H" | "P1D")
  }
  MetricSetList: {
    MetricSetName: StringProperty
    MetricSetDescription?: StringProperty
    MetricSource: {
      S3SourceConfig?: {
        RoleArn: StringProperty
        TemplatedPathList?: StringProperty[]
        HistoricalDataPathList?: StringProperty[]
        FileFormatDescriptor: {
          CsvFormatDescriptor?: {
            FileCompression?: (string | "NONE" | "GZIP")
            Charset?: StringProperty
            Delimiter?: StringProperty
            HeaderList?: StringProperty[]
            QuoteSymbol?: StringProperty
            ContainsHeader?: boolean
          }
          JsonFormatDescriptor?: {
            FileCompression?: (string | "NONE" | "GZIP")
            Charset?: StringProperty
          }
        }
      }
      RDSSourceConfig?: {
        DBInstanceIdentifier: StringProperty
        DatabaseHost: StringProperty
        DatabasePort: number
        SecretManagerArn: StringProperty
        DatabaseName: StringProperty
        TableName: StringProperty
        RoleArn: StringProperty
        VpcConfiguration: {
          SubnetIdList: StringProperty[]
          SecurityGroupIdList: StringProperty[]
        }
      }
      RedshiftSourceConfig?: {
        ClusterIdentifier: StringProperty
        DatabaseHost: StringProperty
        DatabasePort: number
        SecretManagerArn: StringProperty
        DatabaseName: StringProperty
        TableName: StringProperty
        RoleArn: StringProperty
        VpcConfiguration: {
          SubnetIdList: StringProperty[]
          SecurityGroupIdList: StringProperty[]
        }
      }
      CloudwatchConfig?: {
        RoleArn: StringProperty
      }
      AppFlowConfig?: {
        RoleArn: StringProperty
        FlowName: StringProperty
      }
    }
    MetricList: {
      MetricName: StringProperty
      AggregationFunction: (string | "AVG" | "SUM")
      Namespace?: StringProperty
    }[]
    Offset?: number
    TimestampColumn?: {
      ColumnName?: StringProperty
      ColumnFormat?: StringProperty
    }
    DimensionList?: StringProperty[]
    MetricSetFrequency?: (string | "PT5M" | "PT10M" | "PT1H" | "P1D")
    Timezone?: StringProperty
  }[]
  KmsKeyArn?: StringProperty
}

export const AWSLookoutMetricsAnomalyDetector = ({
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
      Type: 'AWS::LookoutMetrics::AnomalyDetector',
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