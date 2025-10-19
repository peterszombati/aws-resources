import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: (string | "CREATION_IN_PROGRESS" | "CREATION_SUCCESSFUL" | "CREATION_FAILED" | "UPDATE_IN_PROGRESS" | "UPDATE_SUCCESSFUL" | "UPDATE_FAILED" | "PENDING_UPDATE" | "DELETED")
  CreatedTime?: StringProperty
  ErrorInfo?: {
    Type?: (string | "ACCESS_DENIED" | "COPY_SOURCE_NOT_FOUND" | "TIMEOUT" | "ENGINE_VERSION_NOT_SUPPORTED" | "UNKNOWN_HOST" | "GENERIC_SQL_FAILURE" | "CONFLICT" | "UNKNOWN")
    Message?: StringProperty
  }
  LastUpdatedTime?: StringProperty
  FolderArns?: StringProperty[]
  Name: StringProperty
  DataSourceParameters?: {
    AuroraPostgreSqlParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    TeradataParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    RdsParameters?: {
      InstanceId: StringProperty
      Database: StringProperty
    }
    AthenaParameters?: {
      WorkGroup?: StringProperty
      IdentityCenterConfiguration?: {
        EnableIdentityPropagation?: boolean
      }
      RoleArn?: StringProperty
    }
    SparkParameters?: {
      Port: number
      Host: StringProperty
    }
    MariaDbParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    OracleParameters?: {
      UseServiceName?: boolean
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    PrestoParameters?: {
      Port: number
      Host: StringProperty
      Catalog: StringProperty
    }
    StarburstParameters?: {
      Port: number
      DatabaseAccessControlRole?: StringProperty
      ProductType?: (string | "GALAXY" | "ENTERPRISE")
      OAuthParameters?: {
        TokenProviderUrl: StringProperty
        OAuthScope?: StringProperty
        IdentityProviderVpcConnectionProperties?: {
          VpcConnectionArn: StringProperty
        }
        IdentityProviderResourceUri?: StringProperty
      }
      Host: StringProperty
      Catalog: StringProperty
      AuthenticationType?: (string | "PASSWORD" | "TOKEN" | "X509")
    }
    RedshiftParameters?: {
      IAMParameters?: {
        AutoCreateDatabaseUser?: boolean
        DatabaseUser?: StringProperty
        RoleArn: StringProperty
        DatabaseGroups?: StringProperty[]
      }
      ClusterId?: StringProperty
      Port?: number
      Database: StringProperty
      Host?: StringProperty
      IdentityCenterConfiguration?: {
        EnableIdentityPropagation?: boolean
      }
    }
    MySqlParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    SqlServerParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    SnowflakeParameters?: {
      Warehouse: StringProperty
      DatabaseAccessControlRole?: StringProperty
      Database: StringProperty
      OAuthParameters?: {
        TokenProviderUrl: StringProperty
        OAuthScope?: StringProperty
        IdentityProviderVpcConnectionProperties?: {
          VpcConnectionArn: StringProperty
        }
        IdentityProviderResourceUri?: StringProperty
      }
      Host: StringProperty
      AuthenticationType?: (string | "PASSWORD" | "TOKEN" | "X509")
    }
    AmazonElasticsearchParameters?: {
      Domain: StringProperty
    }
    AmazonOpenSearchParameters?: {
      Domain: StringProperty
    }
    PostgreSqlParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    AuroraParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    S3Parameters?: {
      ManifestFileLocation: {
        Bucket: StringProperty
        Key: StringProperty
      }
      RoleArn?: StringProperty
    }
    TrinoParameters?: {
      Port: number
      Host: StringProperty
      Catalog: StringProperty
    }
    DatabricksParameters?: {
      Port: number
      Host: StringProperty
      SqlEndpointPath: StringProperty
    }
  }
  Type: (string | "ADOBE_ANALYTICS" | "AMAZON_ELASTICSEARCH" | "AMAZON_OPENSEARCH" | "ATHENA" | "AURORA" | "AURORA_POSTGRESQL" | "AWS_IOT_ANALYTICS" | "DATABRICKS" | "DENODO" | "DREMIO" | "DYNAMODB" | "SAPHANA" | "DB2_AS400" | "EXASOL" | "FILE" | "GITHUB" | "JIRA" | "MARIADB" | "MYSQL" | "ORACLE" | "POSTGRESQL" | "PRESTO" | "QBUSINESS" | "REDSHIFT" | "S3" | "S3_TABLES" | "S3_KNOWLEDGE_BASE" | "SALESFORCE" | "SERVICENOW" | "SNOWFLAKE" | "SPARK" | "SPICE" | "SQLSERVER" | "TERADATA" | "TIMESTREAM" | "TWITTER" | "BIGQUERY" | "GOOGLE_ANALYTICS" | "TRINO" | "STARBURST" | "MONGO" | "MONGO_ATLAS" | "DOCUMENTDB" | "APPFLOW" | "IMPALA" | "GLUE" | "GOOGLE_DRIVE" | "CONFLUENCE" | "SHAREPOINT" | "ONE_DRIVE" | "WEB_CRAWLER")
  VpcConnectionProperties?: {
    VpcConnectionArn: StringProperty
  }
  AlternateDataSourceParameters?: {
    AuroraPostgreSqlParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    TeradataParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    RdsParameters?: {
      InstanceId: StringProperty
      Database: StringProperty
    }
    AthenaParameters?: {
      WorkGroup?: StringProperty
      IdentityCenterConfiguration?: {
        EnableIdentityPropagation?: boolean
      }
      RoleArn?: StringProperty
    }
    SparkParameters?: {
      Port: number
      Host: StringProperty
    }
    MariaDbParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    OracleParameters?: {
      UseServiceName?: boolean
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    PrestoParameters?: {
      Port: number
      Host: StringProperty
      Catalog: StringProperty
    }
    StarburstParameters?: {
      Port: number
      DatabaseAccessControlRole?: StringProperty
      ProductType?: (string | "GALAXY" | "ENTERPRISE")
      OAuthParameters?: {
        TokenProviderUrl: StringProperty
        OAuthScope?: StringProperty
        IdentityProviderVpcConnectionProperties?: {
          VpcConnectionArn: StringProperty
        }
        IdentityProviderResourceUri?: StringProperty
      }
      Host: StringProperty
      Catalog: StringProperty
      AuthenticationType?: (string | "PASSWORD" | "TOKEN" | "X509")
    }
    RedshiftParameters?: {
      IAMParameters?: {
        AutoCreateDatabaseUser?: boolean
        DatabaseUser?: StringProperty
        RoleArn: StringProperty
        DatabaseGroups?: StringProperty[]
      }
      ClusterId?: StringProperty
      Port?: number
      Database: StringProperty
      Host?: StringProperty
      IdentityCenterConfiguration?: {
        EnableIdentityPropagation?: boolean
      }
    }
    MySqlParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    SqlServerParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    SnowflakeParameters?: {
      Warehouse: StringProperty
      DatabaseAccessControlRole?: StringProperty
      Database: StringProperty
      OAuthParameters?: {
        TokenProviderUrl: StringProperty
        OAuthScope?: StringProperty
        IdentityProviderVpcConnectionProperties?: {
          VpcConnectionArn: StringProperty
        }
        IdentityProviderResourceUri?: StringProperty
      }
      Host: StringProperty
      AuthenticationType?: (string | "PASSWORD" | "TOKEN" | "X509")
    }
    AmazonElasticsearchParameters?: {
      Domain: StringProperty
    }
    AmazonOpenSearchParameters?: {
      Domain: StringProperty
    }
    PostgreSqlParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    AuroraParameters?: {
      Port: number
      Database: StringProperty
      Host: StringProperty
    }
    S3Parameters?: {
      ManifestFileLocation: {
        Bucket: StringProperty
        Key: StringProperty
      }
      RoleArn?: StringProperty
    }
    TrinoParameters?: {
      Port: number
      Host: StringProperty
      Catalog: StringProperty
    }
    DatabricksParameters?: {
      Port: number
      Host: StringProperty
      SqlEndpointPath: StringProperty
    }
  }[]
  AwsAccountId?: StringProperty
  Permissions?: {
    Actions: StringProperty[]
    Resource?: StringProperty
    Principal: StringProperty
  }[]
  Arn?: StringProperty
  SslProperties?: {
    DisableSsl?: boolean
  }
  Credentials?: {
    SecretArn?: StringProperty
    CopySourceArn?: StringProperty
    CredentialPair?: {
      AlternateDataSourceParameters?: {
        AuroraPostgreSqlParameters?: {
          Port: number
          Database: StringProperty
          Host: StringProperty
        }
        TeradataParameters?: {
          Port: number
          Database: StringProperty
          Host: StringProperty
        }
        RdsParameters?: {
          InstanceId: StringProperty
          Database: StringProperty
        }
        AthenaParameters?: {
          WorkGroup?: StringProperty
          IdentityCenterConfiguration?: {
            EnableIdentityPropagation?: boolean
          }
          RoleArn?: StringProperty
        }
        SparkParameters?: {
          Port: number
          Host: StringProperty
        }
        MariaDbParameters?: {
          Port: number
          Database: StringProperty
          Host: StringProperty
        }
        OracleParameters?: {
          UseServiceName?: boolean
          Port: number
          Database: StringProperty
          Host: StringProperty
        }
        PrestoParameters?: {
          Port: number
          Host: StringProperty
          Catalog: StringProperty
        }
        StarburstParameters?: {
          Port: number
          DatabaseAccessControlRole?: StringProperty
          ProductType?: (string | "GALAXY" | "ENTERPRISE")
          OAuthParameters?: {
            TokenProviderUrl: StringProperty
            OAuthScope?: StringProperty
            IdentityProviderVpcConnectionProperties?: {
              VpcConnectionArn: StringProperty
            }
            IdentityProviderResourceUri?: StringProperty
          }
          Host: StringProperty
          Catalog: StringProperty
          AuthenticationType?: (string | "PASSWORD" | "TOKEN" | "X509")
        }
        RedshiftParameters?: {
          IAMParameters?: {
            AutoCreateDatabaseUser?: boolean
            DatabaseUser?: StringProperty
            RoleArn: StringProperty
            DatabaseGroups?: StringProperty[]
          }
          ClusterId?: StringProperty
          Port?: number
          Database: StringProperty
          Host?: StringProperty
          IdentityCenterConfiguration?: {
            EnableIdentityPropagation?: boolean
          }
        }
        MySqlParameters?: {
          Port: number
          Database: StringProperty
          Host: StringProperty
        }
        SqlServerParameters?: {
          Port: number
          Database: StringProperty
          Host: StringProperty
        }
        SnowflakeParameters?: {
          Warehouse: StringProperty
          DatabaseAccessControlRole?: StringProperty
          Database: StringProperty
          OAuthParameters?: {
            TokenProviderUrl: StringProperty
            OAuthScope?: StringProperty
            IdentityProviderVpcConnectionProperties?: {
              VpcConnectionArn: StringProperty
            }
            IdentityProviderResourceUri?: StringProperty
          }
          Host: StringProperty
          AuthenticationType?: (string | "PASSWORD" | "TOKEN" | "X509")
        }
        AmazonElasticsearchParameters?: {
          Domain: StringProperty
        }
        AmazonOpenSearchParameters?: {
          Domain: StringProperty
        }
        PostgreSqlParameters?: {
          Port: number
          Database: StringProperty
          Host: StringProperty
        }
        AuroraParameters?: {
          Port: number
          Database: StringProperty
          Host: StringProperty
        }
        S3Parameters?: {
          ManifestFileLocation: {
            Bucket: StringProperty
            Key: StringProperty
          }
          RoleArn?: StringProperty
        }
        TrinoParameters?: {
          Port: number
          Host: StringProperty
          Catalog: StringProperty
        }
        DatabricksParameters?: {
          Port: number
          Host: StringProperty
          SqlEndpointPath: StringProperty
        }
      }[]
      Username: StringProperty
      Password: StringProperty
    }
  }
  DataSourceId?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSQuickSightDataSource = ({
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
      Type: 'AWS::QuickSight::DataSource',
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