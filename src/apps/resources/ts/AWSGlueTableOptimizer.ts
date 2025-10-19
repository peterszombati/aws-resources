import {StringProperty} from "../StringProperty"


type Properties = {
  DatabaseName: StringProperty
  TableName: StringProperty
  Type: StringProperty
  TableOptimizerConfiguration: {
    Enabled: boolean
    RetentionConfiguration?: {
      IcebergConfiguration?: {
        SnapshotRetentionPeriodInDays?: number
        NumberOfSnapshotsToRetain?: number
        CleanExpiredFiles?: boolean
      }
    }
    VpcConfiguration?: {
      GlueConnectionName?: StringProperty
    }
    RoleArn: StringProperty
    OrphanFileDeletionConfiguration?: {
      IcebergConfiguration?: {
        OrphanFileRetentionPeriodInDays?: number
        Location?: StringProperty
      }
    }
  }
  Id?: StringProperty
  CatalogId: StringProperty
}

export const AWSGlueTableOptimizer = ({
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
      Type: 'AWS::Glue::TableOptimizer',
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