import {StringProperty} from "../StringProperty"


type Properties = {
  FeatureGroupName: StringProperty
  RecordIdentifierFeatureName: StringProperty
  EventTimeFeatureName: StringProperty
  FeatureDefinitions: {
    FeatureName: StringProperty
    FeatureType: (string | "Integral" | "Fractional" | "String")
  }[]
  OnlineStoreConfig?: {
    SecurityConfig?: {
      KmsKeyId?: StringProperty
    }
    EnableOnlineStore?: boolean
    StorageType?: (string | "Standard" | "InMemory")
    TtlDuration?: {
      Unit?: (string | "Seconds" | "Minutes" | "Hours" | "Days" | "Weeks")
      Value?: number
    }
  }
  OfflineStoreConfig?: {
    S3StorageConfig: {
      S3Uri: StringProperty
      KmsKeyId?: StringProperty
    }
    DisableGlueTableCreation?: boolean
    DataCatalogConfig?: {
      TableName: StringProperty
      Catalog: StringProperty
      Database: StringProperty
    }
    TableFormat?: (string | "Iceberg" | "Glue")
  }
  ThroughputConfig?: {
    ThroughputMode: (string | "OnDemand" | "Provisioned")
    ProvisionedReadCapacityUnits?: number
    ProvisionedWriteCapacityUnits?: number
  }
  RoleArn?: StringProperty
  Description?: StringProperty
  CreationTime?: StringProperty
  FeatureGroupStatus?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerFeatureGroup = ({
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
      Type: 'AWS::SageMaker::FeatureGroup',
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