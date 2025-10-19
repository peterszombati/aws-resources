import {StringProperty} from "../StringProperty"


type Properties = {
  Classifiers?: StringProperty[]
  Description?: StringProperty
  SchemaChangePolicy?: {
    UpdateBehavior?: StringProperty
    DeleteBehavior?: StringProperty
  }
  Configuration?: StringProperty
  RecrawlPolicy?: {
    RecrawlBehavior?: StringProperty
  }
  DatabaseName?: StringProperty
  Targets: {
    S3Targets?: {
      ConnectionName?: StringProperty
      Path?: StringProperty
      SampleSize?: number
      Exclusions?: StringProperty[]
      DlqEventQueueArn?: StringProperty
      EventQueueArn?: StringProperty
    }[]
    CatalogTargets?: {
      ConnectionName?: StringProperty
      DatabaseName?: StringProperty
      DlqEventQueueArn?: StringProperty
      Tables?: StringProperty[]
      EventQueueArn?: StringProperty
    }[]
    DeltaTargets?: {
      ConnectionName?: StringProperty
      CreateNativeDeltaTable?: boolean
      WriteManifest?: boolean
      DeltaTables?: StringProperty[]
    }[]
    MongoDBTargets?: {
      ConnectionName?: StringProperty
      Path?: StringProperty
    }[]
    JdbcTargets?: {
      ConnectionName?: StringProperty
      Path?: StringProperty
      Exclusions?: StringProperty[]
      EnableAdditionalMetadata?: StringProperty[]
    }[]
    DynamoDBTargets?: {
      Path?: StringProperty
      ScanAll?: boolean
      ScanRate?: number
    }[]
    IcebergTargets?: {
      ConnectionName?: StringProperty
      Paths?: StringProperty[]
      Exclusions?: StringProperty[]
      MaximumTraversalDepth?: number
    }[]
    HudiTargets?: {
      ConnectionName?: StringProperty
      Paths?: StringProperty[]
      Exclusions?: StringProperty[]
      MaximumTraversalDepth?: number
    }[]
  }
  CrawlerSecurityConfiguration?: StringProperty
  Name?: StringProperty
  Role: StringProperty
  LakeFormationConfiguration?: {
    UseLakeFormationCredentials?: boolean
    AccountId?: StringProperty
  }
  Schedule?: {
    ScheduleExpression?: StringProperty
  }
  TablePrefix?: StringProperty
  Tags?: Record<string, any>
}

export const AWSGlueCrawler = ({
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
      Type: 'AWS::Glue::Crawler',
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