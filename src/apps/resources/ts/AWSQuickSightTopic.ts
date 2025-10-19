import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AwsAccountId?: StringProperty
  ConfigOptions?: {
    QBusinessInsightsEnabled?: boolean
  }
  CustomInstructions?: {
    CustomInstructionsString: StringProperty
  }
  DataSets?: {
    DatasetArn: StringProperty
    DatasetName?: StringProperty
    DatasetDescription?: StringProperty
    DataAggregation?: {
      DatasetRowDateGranularity?: (string | "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "QUARTER" | "YEAR")
      DefaultDateColumnName?: StringProperty
    }
    Filters?: {
      FilterDescription?: StringProperty
      FilterClass?: (string | "ENFORCED_VALUE_FILTER" | "CONDITIONAL_VALUE_FILTER" | "NAMED_VALUE_FILTER")
      FilterName: StringProperty
      FilterSynonyms?: StringProperty[]
      OperandFieldName: StringProperty
      FilterType?: (string | "CATEGORY_FILTER" | "NUMERIC_EQUALITY_FILTER" | "NUMERIC_RANGE_FILTER" | "DATE_RANGE_FILTER" | "RELATIVE_DATE_FILTER")
      CategoryFilter?: {
        CategoryFilterFunction?: (string | "EXACT" | "CONTAINS")
        CategoryFilterType?: (string | "CUSTOM_FILTER" | "CUSTOM_FILTER_LIST" | "FILTER_LIST")
        Constant?: {
          ConstantType?: (string | "SINGULAR" | "RANGE" | "COLLECTIVE")
          SingularConstant?: StringProperty
          CollectiveConstant?: {
            ValueList?: StringProperty[]
          }
        }
        Inverse?: boolean
      }
      NumericEqualityFilter?: {
        Constant?: {
          ConstantType?: (string | "SINGULAR" | "RANGE" | "COLLECTIVE")
          SingularConstant?: StringProperty
        }
        Aggregation?: (string | "NO_AGGREGATION" | "SUM" | "AVERAGE" | "COUNT" | "DISTINCT_COUNT" | "MAX" | "MEDIAN" | "MIN" | "STDEV" | "STDEVP" | "VAR" | "VARP")
      }
      NumericRangeFilter?: {
        Inclusive?: boolean
        Constant?: {
          ConstantType?: (string | "SINGULAR" | "RANGE" | "COLLECTIVE")
          RangeConstant?: {
            Minimum?: StringProperty
            Maximum?: StringProperty
          }
        }
        Aggregation?: (string | "NO_AGGREGATION" | "SUM" | "AVERAGE" | "COUNT" | "DISTINCT_COUNT" | "MAX" | "MEDIAN" | "MIN" | "STDEV" | "STDEVP" | "VAR" | "VARP")
      }
      DateRangeFilter?: {
        Inclusive?: boolean
        Constant?: {
          ConstantType?: (string | "SINGULAR" | "RANGE" | "COLLECTIVE")
          RangeConstant?: {
            Minimum?: StringProperty
            Maximum?: StringProperty
          }
        }
      }
      RelativeDateFilter?: {
        TimeGranularity?: (string | "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "QUARTER" | "YEAR")
        RelativeDateFilterFunction?: (string | "PREVIOUS" | "THIS" | "LAST" | "NEXT" | "NOW")
        Constant?: {
          ConstantType?: (string | "SINGULAR" | "RANGE" | "COLLECTIVE")
          SingularConstant?: StringProperty
        }
      }
    }[]
    Columns?: {
      ColumnName: StringProperty
      ColumnFriendlyName?: StringProperty
      ColumnDescription?: StringProperty
      ColumnSynonyms?: StringProperty[]
      ColumnDataRole?: (string | "DIMENSION" | "MEASURE")
      Aggregation?: (string | "SUM" | "MAX" | "MIN" | "COUNT" | "DISTINCT_COUNT" | "AVERAGE" | "MEDIAN" | "STDEV" | "STDEVP" | "VAR" | "VARP")
      IsIncludedInTopic?: boolean
      DisableIndexing?: boolean
      ComparativeOrder?: {
        UseOrdering?: (string | "GREATER_IS_BETTER" | "LESSER_IS_BETTER" | "SPECIFIED")
        SpecifedOrder?: StringProperty[]
        TreatUndefinedSpecifiedValues?: (string | "LEAST" | "MOST")
      }
      SemanticType?: {
        TypeName?: StringProperty
        SubTypeName?: StringProperty
        TypeParameters?: Record<string, any>
        TruthyCellValue?: StringProperty
        TruthyCellValueSynonyms?: StringProperty[]
        FalseyCellValue?: StringProperty
        FalseyCellValueSynonyms?: StringProperty[]
      }
      TimeGranularity?: (string | "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "QUARTER" | "YEAR")
      AllowedAggregations?: (string | "COUNT" | "DISTINCT_COUNT" | "MIN" | "MAX" | "MEDIAN" | "SUM" | "AVERAGE" | "STDEV" | "STDEVP" | "VAR" | "VARP" | "PERCENTILE")[]
      NotAllowedAggregations?: (string | "COUNT" | "DISTINCT_COUNT" | "MIN" | "MAX" | "MEDIAN" | "SUM" | "AVERAGE" | "STDEV" | "STDEVP" | "VAR" | "VARP" | "PERCENTILE")[]
      DefaultFormatting?: {
        DisplayFormat?: (string | "AUTO" | "PERCENT" | "CURRENCY" | "NUMBER" | "DATE" | "STRING")
        DisplayFormatOptions?: {
          UseBlankCellFormat?: boolean
          BlankCellFormat?: StringProperty
          DateFormat?: StringProperty
          DecimalSeparator?: (string | "COMMA" | "DOT")
          GroupingSeparator?: StringProperty
          UseGrouping?: boolean
          FractionDigits?: number
          Prefix?: StringProperty
          Suffix?: StringProperty
          UnitScaler?: (string | "NONE" | "AUTO" | "THOUSANDS" | "MILLIONS" | "BILLIONS" | "TRILLIONS" | "LAKHS" | "CRORES")
          NegativeFormat?: {
            Prefix?: StringProperty
            Suffix?: StringProperty
          }
          CurrencySymbol?: StringProperty
        }
      }
      NeverAggregateInFilter?: boolean
      CellValueSynonyms?: {
        CellValue?: StringProperty
        Synonyms?: StringProperty[]
      }[]
      NonAdditive?: boolean
    }[]
    CalculatedFields?: {
      CalculatedFieldName: StringProperty
      CalculatedFieldDescription?: StringProperty
      Expression: StringProperty
      CalculatedFieldSynonyms?: StringProperty[]
      IsIncludedInTopic?: boolean
      DisableIndexing?: boolean
      ColumnDataRole?: (string | "DIMENSION" | "MEASURE")
      TimeGranularity?: (string | "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "QUARTER" | "YEAR")
      DefaultFormatting?: {
        DisplayFormat?: (string | "AUTO" | "PERCENT" | "CURRENCY" | "NUMBER" | "DATE" | "STRING")
        DisplayFormatOptions?: {
          UseBlankCellFormat?: boolean
          BlankCellFormat?: StringProperty
          DateFormat?: StringProperty
          DecimalSeparator?: (string | "COMMA" | "DOT")
          GroupingSeparator?: StringProperty
          UseGrouping?: boolean
          FractionDigits?: number
          Prefix?: StringProperty
          Suffix?: StringProperty
          UnitScaler?: (string | "NONE" | "AUTO" | "THOUSANDS" | "MILLIONS" | "BILLIONS" | "TRILLIONS" | "LAKHS" | "CRORES")
          NegativeFormat?: {
            Prefix?: StringProperty
            Suffix?: StringProperty
          }
          CurrencySymbol?: StringProperty
        }
      }
      Aggregation?: (string | "SUM" | "MAX" | "MIN" | "COUNT" | "DISTINCT_COUNT" | "AVERAGE" | "MEDIAN" | "STDEV" | "STDEVP" | "VAR" | "VARP")
      ComparativeOrder?: {
        UseOrdering?: (string | "GREATER_IS_BETTER" | "LESSER_IS_BETTER" | "SPECIFIED")
        SpecifedOrder?: StringProperty[]
        TreatUndefinedSpecifiedValues?: (string | "LEAST" | "MOST")
      }
      SemanticType?: {
        TypeName?: StringProperty
        SubTypeName?: StringProperty
        TypeParameters?: Record<string, any>
        TruthyCellValue?: StringProperty
        TruthyCellValueSynonyms?: StringProperty[]
        FalseyCellValue?: StringProperty
        FalseyCellValueSynonyms?: StringProperty[]
      }
      AllowedAggregations?: (string | "COUNT" | "DISTINCT_COUNT" | "MIN" | "MAX" | "MEDIAN" | "SUM" | "AVERAGE" | "STDEV" | "STDEVP" | "VAR" | "VARP" | "PERCENTILE")[]
      NotAllowedAggregations?: (string | "COUNT" | "DISTINCT_COUNT" | "MIN" | "MAX" | "MEDIAN" | "SUM" | "AVERAGE" | "STDEV" | "STDEVP" | "VAR" | "VARP" | "PERCENTILE")[]
      NeverAggregateInFilter?: boolean
      CellValueSynonyms?: {
        CellValue?: StringProperty
        Synonyms?: StringProperty[]
      }[]
      NonAdditive?: boolean
    }[]
    NamedEntities?: {
      EntityName: StringProperty
      EntityDescription?: StringProperty
      EntitySynonyms?: StringProperty[]
      SemanticEntityType?: {
        TypeName?: StringProperty
        SubTypeName?: StringProperty
        TypeParameters?: Record<string, any>
      }
      Definition?: {
        FieldName?: StringProperty
        PropertyName?: StringProperty
        PropertyRole?: (string | "PRIMARY" | "ID")
        PropertyUsage?: (string | "INHERIT" | "DIMENSION" | "MEASURE")
        Metric?: {
          Aggregation?: (string | "SUM" | "MIN" | "MAX" | "COUNT" | "AVERAGE" | "DISTINCT_COUNT" | "STDEV" | "STDEVP" | "VAR" | "VARP" | "PERCENTILE" | "MEDIAN" | "CUSTOM")
          AggregationFunctionParameters?: Record<string, any>
        }
      }[]
    }[]
  }[]
  Description?: StringProperty
  FolderArns?: StringProperty[]
  Name?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TopicId?: StringProperty
  UserExperienceVersion?: (string | "LEGACY" | "NEW_READER_EXPERIENCE")
}

export const AWSQuickSightTopic = ({
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
      Type: 'AWS::QuickSight::Topic',
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