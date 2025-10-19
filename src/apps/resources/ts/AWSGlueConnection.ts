import {StringProperty} from "../StringProperty"


type Properties = {
  ConnectionInput: {
    AuthenticationConfiguration?: {
      SecretArn?: StringProperty
      KmsKeyArn?: StringProperty
      OAuth2Properties?: {
        AuthorizationCodeProperties?: {
          AuthorizationCode?: StringProperty
          RedirectUri?: StringProperty
        }
        OAuth2ClientApplication?: {
          AWSManagedClientApplicationReference?: StringProperty
          UserManagedClientApplicationClientId?: StringProperty
        }
        TokenUrl?: StringProperty
        OAuth2Credentials?: {
          UserManagedClientApplicationClientSecret?: StringProperty
          JwtToken?: StringProperty
          RefreshToken?: StringProperty
          AccessToken?: StringProperty
        }
        OAuth2GrantType?: StringProperty
        TokenUrlParametersMap?: Record<string, any>
      }
      CustomAuthenticationCredentials?: Record<string, any>
      BasicAuthenticationCredentials?: {
        Username?: StringProperty
        Password?: StringProperty
      }
      AuthenticationType: StringProperty
    }
    PythonProperties?: Record<string, any>
    Description?: StringProperty
    ConnectionType: StringProperty
    MatchCriteria?: StringProperty[]
    ConnectionProperties?: Record<string, any>
    AthenaProperties?: Record<string, any>
    ValidateForComputeEnvironments?: StringProperty[]
    Name?: StringProperty
    SparkProperties?: Record<string, any>
    PhysicalConnectionRequirements?: {
      AvailabilityZone?: StringProperty
      SecurityGroupIdList?: StringProperty[]
      SubnetId?: StringProperty
    }
    ValidateCredentials?: boolean
  }
  CatalogId: StringProperty
  Id?: StringProperty
}

export const AWSGlueConnection = ({
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
      Type: 'AWS::Glue::Connection',
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