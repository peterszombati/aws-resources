import {StringProperty} from "../StringProperty"


type Properties = {
  ConnectorProfileArn?: StringProperty
  ConnectorLabel?: StringProperty
  ConnectorProfileName: StringProperty
  KMSArn?: StringProperty
  ConnectorType: (string | "Salesforce" | "Pardot" | "Singular" | "Slack" | "Redshift" | "Marketo" | "Googleanalytics" | "Zendesk" | "Servicenow" | "SAPOData" | "Datadog" | "Trendmicro" | "Snowflake" | "Dynatrace" | "Infornexus" | "Amplitude" | "Veeva" | "CustomConnector")
  ConnectionMode: (string | "Public" | "Private")
  ConnectorProfileConfig?: {
    ConnectorProfileProperties?: {
      Datadog?: {
        InstanceUrl: StringProperty
      }
      Dynatrace?: {
        InstanceUrl: StringProperty
      }
      InforNexus?: {
        InstanceUrl: StringProperty
      }
      Marketo?: {
        InstanceUrl: StringProperty
      }
      Redshift?: {
        DatabaseUrl?: StringProperty
        BucketName: StringProperty
        BucketPrefix?: StringProperty
        RoleArn: StringProperty
        IsRedshiftServerless?: boolean
        DataApiRoleArn?: StringProperty
        ClusterIdentifier?: StringProperty
        WorkgroupName?: StringProperty
        DatabaseName?: StringProperty
      }
      SAPOData?: {
        ApplicationHostUrl?: StringProperty
        ApplicationServicePath?: StringProperty
        PortNumber?: number
        ClientNumber?: StringProperty
        LogonLanguage?: StringProperty
        PrivateLinkServiceName?: StringProperty
        OAuthProperties?: {
          AuthCodeUrl?: StringProperty
          TokenUrl?: StringProperty
          OAuthScopes?: StringProperty[]
        }
        DisableSSO?: boolean
      }
      Salesforce?: {
        InstanceUrl?: StringProperty
        isSandboxEnvironment?: boolean
        usePrivateLinkForMetadataAndAuthorization?: boolean
      }
      Pardot?: {
        InstanceUrl?: StringProperty
        IsSandboxEnvironment?: boolean
        BusinessUnitId: StringProperty
      }
      ServiceNow?: {
        InstanceUrl: StringProperty
      }
      Slack?: {
        InstanceUrl: StringProperty
      }
      Snowflake?: {
        Warehouse: StringProperty
        Stage: StringProperty
        BucketName: StringProperty
        BucketPrefix?: StringProperty
        PrivateLinkServiceName?: StringProperty
        AccountName?: StringProperty
        Region?: StringProperty
      }
      Veeva?: {
        InstanceUrl: StringProperty
      }
      Zendesk?: {
        InstanceUrl: StringProperty
      }
      CustomConnector?: {
        ProfileProperties?: Record<string, any>
        OAuth2Properties?: {
          TokenUrl?: StringProperty
          OAuth2GrantType?: (string | "CLIENT_CREDENTIALS" | "AUTHORIZATION_CODE" | "JWT_BEARER")
          TokenUrlCustomProperties?: Record<string, any>
        }
      }
    }
    ConnectorProfileCredentials?: {
      Amplitude?: {
        ApiKey: StringProperty
        SecretKey: StringProperty
      }
      Datadog?: {
        ApiKey: StringProperty
        ApplicationKey: StringProperty
      }
      Dynatrace?: {
        ApiToken: StringProperty
      }
      GoogleAnalytics?: {
        ClientId: StringProperty
        ClientSecret: StringProperty
        AccessToken?: StringProperty
        RefreshToken?: StringProperty
        ConnectorOAuthRequest?: {
          AuthCode?: StringProperty
          RedirectUri?: StringProperty
        }
      }
      InforNexus?: {
        AccessKeyId: StringProperty
        UserId: StringProperty
        SecretAccessKey: StringProperty
        Datakey: StringProperty
      }
      Marketo?: {
        ClientId: StringProperty
        ClientSecret: StringProperty
        AccessToken?: StringProperty
        ConnectorOAuthRequest?: {
          AuthCode?: StringProperty
          RedirectUri?: StringProperty
        }
      }
      Redshift?: {
        Username?: StringProperty
        Password?: StringProperty
      }
      SAPOData?: {
        BasicAuthCredentials?: {
          Username: StringProperty
          Password: StringProperty
        }
        OAuthCredentials?: {
          AccessToken?: StringProperty
          RefreshToken?: StringProperty
          ConnectorOAuthRequest?: {
            AuthCode?: StringProperty
            RedirectUri?: StringProperty
          }
          ClientId?: StringProperty
          ClientSecret?: StringProperty
        }
      }
      Salesforce?: {
        AccessToken?: StringProperty
        RefreshToken?: StringProperty
        ConnectorOAuthRequest?: {
          AuthCode?: StringProperty
          RedirectUri?: StringProperty
        }
        ClientCredentialsArn?: StringProperty
        OAuth2GrantType?: (string | "CLIENT_CREDENTIALS" | "AUTHORIZATION_CODE" | "JWT_BEARER")
        JwtToken?: StringProperty
      }
      Pardot?: {
        AccessToken?: StringProperty
        RefreshToken?: StringProperty
        ConnectorOAuthRequest?: {
          AuthCode?: StringProperty
          RedirectUri?: StringProperty
        }
        ClientCredentialsArn?: StringProperty
      }
      ServiceNow?: {
        Username?: StringProperty
        Password?: StringProperty
        OAuth2Credentials?: {
          ClientId?: StringProperty
          ClientSecret?: StringProperty
          AccessToken?: StringProperty
          RefreshToken?: StringProperty
          OAuthRequest?: {
            AuthCode?: StringProperty
            RedirectUri?: StringProperty
          }
        }
      }
      Singular?: {
        ApiKey: StringProperty
      }
      Slack?: {
        ClientId: StringProperty
        ClientSecret: StringProperty
        AccessToken?: StringProperty
        ConnectorOAuthRequest?: {
          AuthCode?: StringProperty
          RedirectUri?: StringProperty
        }
      }
      Snowflake?: {
        Username: StringProperty
        Password: StringProperty
      }
      Trendmicro?: {
        ApiSecretKey: StringProperty
      }
      Veeva?: {
        Username: StringProperty
        Password: StringProperty
      }
      Zendesk?: {
        ClientId: StringProperty
        ClientSecret: StringProperty
        AccessToken?: StringProperty
        ConnectorOAuthRequest?: {
          AuthCode?: StringProperty
          RedirectUri?: StringProperty
        }
      }
      CustomConnector?: {
        AuthenticationType: (string | "OAUTH2" | "APIKEY" | "BASIC" | "CUSTOM")
        Basic?: {
          Username: StringProperty
          Password: StringProperty
        }
        Oauth2?: {
          ClientId?: StringProperty
          ClientSecret?: StringProperty
          AccessToken?: StringProperty
          RefreshToken?: StringProperty
          OAuthRequest?: {
            AuthCode?: StringProperty
            RedirectUri?: StringProperty
          }
        }
        ApiKey?: {
          ApiKey: StringProperty
          ApiSecretKey?: StringProperty
        }
        Custom?: {
          CustomAuthenticationType: StringProperty
          CredentialsMap?: Record<string, any>
        }
      }
    }
  }
  CredentialsArn?: StringProperty
}

export const AWSAppFlowConnectorProfile = ({
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
      Type: 'AWS::AppFlow::ConnectorProfile',
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