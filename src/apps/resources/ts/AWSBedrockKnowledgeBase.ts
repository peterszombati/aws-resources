import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  KnowledgeBaseConfiguration: {
    Type: (string | "VECTOR" | "KENDRA" | "SQL")
    VectorKnowledgeBaseConfiguration?: {
      EmbeddingModelArn: StringProperty
      EmbeddingModelConfiguration?: {
        BedrockEmbeddingModelConfiguration?: {
          Dimensions?: number
          EmbeddingDataType?: (string | "FLOAT32" | "BINARY")
        }
      }
      SupplementalDataStorageConfiguration?: {
        SupplementalDataStorageLocations: {
          SupplementalDataStorageLocationType: (string | "S3")
          S3Location?: {
            URI: StringProperty
          }
        }[]
      }
    }
    KendraKnowledgeBaseConfiguration?: {
      KendraIndexArn: StringProperty
    }
    SqlKnowledgeBaseConfiguration?: {
      Type: (string | "REDSHIFT")
      RedshiftConfiguration?: {
        StorageConfigurations: {
          Type: (string | "REDSHIFT" | "AWS_DATA_CATALOG")
          AwsDataCatalogConfiguration?: {
            TableNames: StringProperty[]
          }
          RedshiftConfiguration?: {
            DatabaseName: StringProperty
          }
        }[]
        QueryEngineConfiguration: {
          Type: (string | "SERVERLESS" | "PROVISIONED")
          ServerlessConfiguration?: {
            WorkgroupArn: StringProperty
            AuthConfiguration: {
              Type: (string | "IAM" | "USERNAME_PASSWORD")
              UsernamePasswordSecretArn?: StringProperty
            }
          }
          ProvisionedConfiguration?: {
            ClusterIdentifier: StringProperty
            AuthConfiguration: {
              Type: (string | "IAM" | "USERNAME_PASSWORD" | "USERNAME")
              DatabaseUser?: StringProperty
              UsernamePasswordSecretArn?: StringProperty
            }
          }
        }
        QueryGenerationConfiguration?: {
          ExecutionTimeoutSeconds?: number
          GenerationContext?: {
            Tables?: {
              Name: StringProperty
              Description?: StringProperty
              Inclusion?: (string | "INCLUDE" | "EXCLUDE")
              Columns?: {
                Name?: StringProperty
                Description?: StringProperty
                Inclusion?: (string | "INCLUDE" | "EXCLUDE")
              }[]
            }[]
            CuratedQueries?: {
              NaturalLanguage: StringProperty
              Sql: StringProperty
            }[]
          }
        }
      }
    }
  }
  KnowledgeBaseId?: StringProperty
  KnowledgeBaseArn?: StringProperty
  Name: StringProperty
  Status?: (string | "CREATING" | "ACTIVE" | "DELETING" | "UPDATING" | "FAILED" | "DELETE_UNSUCCESSFUL")
  RoleArn: StringProperty
  CreatedAt?: StringProperty
  FailureReasons?: StringProperty[]
  UpdatedAt?: StringProperty
  StorageConfiguration?: {
    Type: (string | "OPENSEARCH_SERVERLESS" | "PINECONE" | "RDS" | "MONGO_DB_ATLAS" | "NEPTUNE_ANALYTICS" | "OPENSEARCH_MANAGED_CLUSTER")
    OpensearchServerlessConfiguration?: {
      CollectionArn: StringProperty
      VectorIndexName: StringProperty
      FieldMapping: {
        VectorField: StringProperty
        TextField: StringProperty
        MetadataField: StringProperty
      }
    }
    PineconeConfiguration?: {
      ConnectionString: StringProperty
      CredentialsSecretArn: StringProperty
      Namespace?: StringProperty
      FieldMapping: {
        TextField: StringProperty
        MetadataField: StringProperty
      }
    }
    RdsConfiguration?: {
      ResourceArn: StringProperty
      CredentialsSecretArn: StringProperty
      DatabaseName: StringProperty
      TableName: StringProperty
      FieldMapping: {
        PrimaryKeyField: StringProperty
        VectorField: StringProperty
        TextField: StringProperty
        MetadataField: StringProperty
        CustomMetadataField?: StringProperty
      }
    }
    MongoDbAtlasConfiguration?: {
      Endpoint: StringProperty
      CredentialsSecretArn: StringProperty
      DatabaseName: StringProperty
      CollectionName: StringProperty
      VectorIndexName: StringProperty
      TextIndexName?: StringProperty
      EndpointServiceName?: StringProperty
      FieldMapping: {
        VectorField: StringProperty
        TextField: StringProperty
        MetadataField: StringProperty
      }
    }
    NeptuneAnalyticsConfiguration?: {
      GraphArn: StringProperty
      FieldMapping: {
        TextField: StringProperty
        MetadataField: StringProperty
      }
    }
    OpensearchManagedClusterConfiguration?: {
      DomainArn: StringProperty
      DomainEndpoint: StringProperty
      VectorIndexName: StringProperty
      FieldMapping: {
        VectorField: StringProperty
        TextField: StringProperty
        MetadataField: StringProperty
      }
    }
  }
  Tags?: Record<string, any>
}

export const AWSBedrockKnowledgeBase = ({
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
      Type: 'AWS::Bedrock::KnowledgeBase',
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