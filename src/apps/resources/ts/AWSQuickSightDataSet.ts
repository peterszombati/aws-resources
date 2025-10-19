import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedTime?: StringProperty
  FolderArns?: StringProperty[]
  ConsumedSpiceCapacityInBytes?: number
  RowLevelPermissionDataSet?: {
    Status?: (string | "ENABLED" | "DISABLED")
    FormatVersion?: (string | "VERSION_1" | "VERSION_2")
    Arn: StringProperty
    Namespace?: StringProperty
    PermissionPolicy: (string | "GRANT_ACCESS" | "DENY_ACCESS")
  }
  IngestionWaitPolicy?: {
    WaitForSpiceIngestion?: boolean
    IngestionWaitTimeInHours?: number
  }
  ColumnLevelPermissionRules?: {
    ColumnNames?: StringProperty[]
    Principals?: StringProperty[]
  }[]
  Name?: StringProperty
  Permissions?: {
    Actions: StringProperty[]
    Principal: StringProperty
  }[]
  UseAs?: (string | "RLS_RULES")
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  PhysicalTableMap?: Record<string, any>
  FieldFolders?: Record<string, any>
  LastUpdatedTime?: StringProperty
  DataSetId?: StringProperty
  PerformanceConfiguration?: {
    UniqueKeys?: {
      ColumnNames?: StringProperty[]
    }[]
  }
  DataSetRefreshProperties?: {
    RefreshConfiguration?: {
      IncrementalRefresh: {
        LookbackWindow: {
          ColumnName: StringProperty
          SizeUnit: (string | "HOUR" | "DAY" | "WEEK")
          Size: number
        }
      }
    }
    FailureConfiguration?: {
      EmailAlert?: {
        AlertStatus?: (string | "ENABLED" | "DISABLED")
      }
    }
  }
  RowLevelPermissionTagConfiguration?: {
    Status?: (string | "ENABLED" | "DISABLED")
    TagRules: {
      ColumnName?: StringProperty
      TagKey: StringProperty
      MatchAllValue?: StringProperty
      TagMultiValueDelimiter?: StringProperty
    }[]
    TagRuleConfigurations?: StringProperty[][]
  }
  ColumnGroups?: {
    GeoSpatialColumnGroup?: {
      Columns: StringProperty[]
      CountryCode?: (string | "US")
      Name: StringProperty
    }
  }[]
  ImportMode?: (string | "SPICE" | "DIRECT_QUERY")
  DatasetParameters?: {
    IntegerDatasetParameter?: {
      ValueType: (string | "MULTI_VALUED" | "SINGLE_VALUED")
      DefaultValues?: {
        StaticValues?: number[]
      }
      Id: StringProperty
      Name: StringProperty
    }
    DateTimeDatasetParameter?: {
      ValueType: (string | "MULTI_VALUED" | "SINGLE_VALUED")
      TimeGranularity?: (string | "YEAR" | "QUARTER" | "MONTH" | "WEEK" | "DAY" | "HOUR" | "MINUTE" | "SECOND" | "MILLISECOND")
      DefaultValues?: {
        StaticValues?: StringProperty[]
      }
      Id: StringProperty
      Name: StringProperty
    }
    DecimalDatasetParameter?: {
      ValueType: (string | "MULTI_VALUED" | "SINGLE_VALUED")
      DefaultValues?: {
        StaticValues?: number[]
      }
      Id: StringProperty
      Name: StringProperty
    }
    StringDatasetParameter?: {
      ValueType: (string | "MULTI_VALUED" | "SINGLE_VALUED")
      DefaultValues?: {
        StaticValues?: StringProperty[]
      }
      Id: StringProperty
      Name: StringProperty
    }
  }[]
  LogicalTableMap?: Record<string, any>
  AwsAccountId?: StringProperty
  DataSetUsageConfiguration?: {
    DisableUseAsImportedSource?: boolean
    DisableUseAsDirectQuerySource?: boolean
  }
  OutputColumns?: {
    Type?: (string | "STRING" | "INTEGER" | "DECIMAL" | "DATETIME")
    Description?: StringProperty
    SubType?: (string | "FLOAT" | "FIXED")
    Name?: StringProperty
  }[]
  Arn?: StringProperty
}

export const AWSQuickSightDataSet = ({
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
      Type: 'AWS::QuickSight::DataSet',
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