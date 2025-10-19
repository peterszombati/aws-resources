import {StringProperty} from "../StringProperty"


type Properties = {
  StorageLensConfiguration: {
    AccountLevel: {
      AdvancedDataProtectionMetrics?: {
        IsEnabled?: boolean
      }
      StorageLensGroupLevel?: {
        StorageLensGroupSelectionCriteria?: {
          Exclude?: StringProperty[]
          Include?: StringProperty[]
        }
      }
      ActivityMetrics?: {
        IsEnabled?: boolean
      }
      BucketLevel: {
        AdvancedDataProtectionMetrics?: {
          IsEnabled?: boolean
        }
        PrefixLevel?: {
          StorageMetrics: {
            IsEnabled?: boolean
            SelectionCriteria?: {
              Delimiter?: StringProperty
              MaxDepth?: number
              MinStorageBytesPercentage?: number
            }
          }
        }
        ActivityMetrics?: {
          IsEnabled?: boolean
        }
        AdvancedCostOptimizationMetrics?: {
          IsEnabled?: boolean
        }
        DetailedStatusCodesMetrics?: {
          IsEnabled?: boolean
        }
      }
      AdvancedCostOptimizationMetrics?: {
        IsEnabled?: boolean
      }
      DetailedStatusCodesMetrics?: {
        IsEnabled?: boolean
      }
    }
    Exclude?: {
      Regions?: StringProperty[]
      Buckets?: StringProperty[]
    }
    IsEnabled: boolean
    Include?: {
      Regions?: StringProperty[]
      Buckets?: StringProperty[]
    }
    AwsOrg?: {
      Arn: StringProperty
    }
    Id: StringProperty
    StorageLensArn?: StringProperty
    DataExport?: {
      S3BucketDestination?: {
        OutputSchemaVersion: (string | "V_1")
        Format: (string | "CSV" | "Parquet")
        AccountId: StringProperty
        Prefix?: StringProperty
        Encryption?: Record<string, any>
        Arn: StringProperty
      }
      CloudWatchMetrics?: {
        IsEnabled: boolean
      }
    }
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSS3StorageLens = ({
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
      Type: 'AWS::S3::StorageLens',
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