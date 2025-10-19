import {StringProperty} from "../StringProperty"


type Properties = {
  DataSourceConfiguration: {
    Type: (string | "S3" | "CONFLUENCE" | "SALESFORCE" | "SHAREPOINT" | "WEB" | "CUSTOM" | "REDSHIFT_METADATA")
    S3Configuration?: {
      BucketArn: StringProperty
      InclusionPrefixes?: StringProperty[]
      BucketOwnerAccountId?: StringProperty
    }
    ConfluenceConfiguration?: {
      SourceConfiguration: {
        HostUrl: StringProperty
        HostType: (string | "SAAS")
        AuthType: (string | "BASIC" | "OAUTH2_CLIENT_CREDENTIALS")
        CredentialsSecretArn: StringProperty
      }
      CrawlerConfiguration?: {
        FilterConfiguration?: {
          Type: (string | "PATTERN")
          PatternObjectFilter?: {
            Filters: {
              ObjectType: StringProperty
              InclusionFilters?: StringProperty[]
              ExclusionFilters?: StringProperty[]
            }[]
          }
        }
      }
    }
    SalesforceConfiguration?: {
      SourceConfiguration: {
        HostUrl: StringProperty
        AuthType: (string | "OAUTH2_CLIENT_CREDENTIALS")
        CredentialsSecretArn: StringProperty
      }
      CrawlerConfiguration?: {
        FilterConfiguration?: {
          Type: (string | "PATTERN")
          PatternObjectFilter?: {
            Filters: {
              ObjectType: StringProperty
              InclusionFilters?: StringProperty[]
              ExclusionFilters?: StringProperty[]
            }[]
          }
        }
      }
    }
    SharePointConfiguration?: {
      SourceConfiguration: {
        SiteUrls: StringProperty[]
        HostType: (string | "ONLINE")
        AuthType: (string | "OAUTH2_CLIENT_CREDENTIALS" | "OAUTH2_SHAREPOINT_APP_ONLY_CLIENT_CREDENTIALS")
        CredentialsSecretArn: StringProperty
        TenantId?: StringProperty
        Domain: StringProperty
      }
      CrawlerConfiguration?: {
        FilterConfiguration?: {
          Type: (string | "PATTERN")
          PatternObjectFilter?: {
            Filters: {
              ObjectType: StringProperty
              InclusionFilters?: StringProperty[]
              ExclusionFilters?: StringProperty[]
            }[]
          }
        }
      }
    }
    WebConfiguration?: {
      SourceConfiguration: {
        UrlConfiguration: {
          SeedUrls: {
            Url: StringProperty
          }[]
        }
      }
      CrawlerConfiguration?: {
        CrawlerLimits?: {
          RateLimit?: number
          MaxPages?: number
        }
        InclusionFilters?: StringProperty[]
        ExclusionFilters?: StringProperty[]
        Scope?: (string | "HOST_ONLY" | "SUBDOMAINS")
        UserAgent?: StringProperty
        UserAgentHeader?: StringProperty
      }
    }
  }
  DataSourceId?: StringProperty
  Description?: StringProperty
  KnowledgeBaseId: StringProperty
  DataSourceStatus?: (string | "AVAILABLE" | "DELETING" | "DELETE_UNSUCCESSFUL")
  Name: StringProperty
  ServerSideEncryptionConfiguration?: {
    KmsKeyArn?: StringProperty
  }
  VectorIngestionConfiguration?: {
    ChunkingConfiguration?: {
      ChunkingStrategy: (string | "FIXED_SIZE" | "NONE" | "HIERARCHICAL" | "SEMANTIC")
      FixedSizeChunkingConfiguration?: {
        MaxTokens: number
        OverlapPercentage: number
      }
      HierarchicalChunkingConfiguration?: {
        LevelConfigurations: {
          MaxTokens: number
        }[]
        OverlapTokens: number
      }
      SemanticChunkingConfiguration?: {
        BreakpointPercentileThreshold: number
        BufferSize: number
        MaxTokens: number
      }
    }
    CustomTransformationConfiguration?: {
      IntermediateStorage: {
        S3Location: {
          URI: StringProperty
        }
      }
      Transformations: {
        StepToApply: (string | "POST_CHUNKING")
        TransformationFunction: {
          TransformationLambdaConfiguration: {
            LambdaArn: StringProperty
          }
        }
      }[]
    }
    ParsingConfiguration?: {
      ParsingStrategy: (string | "BEDROCK_FOUNDATION_MODEL" | "BEDROCK_DATA_AUTOMATION")
      BedrockFoundationModelConfiguration?: {
        ModelArn: StringProperty
        ParsingPrompt?: {
          ParsingPromptText: StringProperty
        }
        ParsingModality?: (string | "MULTIMODAL")
      }
      BedrockDataAutomationConfiguration?: {
        ParsingModality?: (string | "MULTIMODAL")
      }
    }
    ContextEnrichmentConfiguration?: {
      Type: (string | "BEDROCK_FOUNDATION_MODEL")
      BedrockFoundationModelConfiguration?: {
        EnrichmentStrategyConfiguration: {
          Method: (string | "CHUNK_ENTITY_EXTRACTION")
        }
        ModelArn: StringProperty
      }
    }
  }
  DataDeletionPolicy?: (string | "RETAIN" | "DELETE")
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  FailureReasons?: StringProperty[]
}

export const AWSBedrockDataSource = ({
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
      Type: 'AWS::Bedrock::DataSource',
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