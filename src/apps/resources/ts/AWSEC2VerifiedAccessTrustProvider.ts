import {StringProperty} from "../StringProperty"


type Properties = {
  TrustProviderType: StringProperty
  DeviceTrustProviderType?: StringProperty
  UserTrustProviderType?: StringProperty
  OidcOptions?: {
    Issuer?: StringProperty
    AuthorizationEndpoint?: StringProperty
    TokenEndpoint?: StringProperty
    UserInfoEndpoint?: StringProperty
    ClientId?: StringProperty
    ClientSecret?: StringProperty
    Scope?: StringProperty
  }
  DeviceOptions?: {
    TenantId?: StringProperty
    PublicSigningKeyUrl?: StringProperty
  }
  PolicyReferenceName: StringProperty
  CreationTime?: StringProperty
  LastUpdatedTime?: StringProperty
  VerifiedAccessTrustProviderId?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  SseSpecification?: {
    KmsKeyArn?: StringProperty
    CustomerManagedKeyEnabled?: boolean
  }
  NativeApplicationOidcOptions?: {
    Issuer?: StringProperty
    AuthorizationEndpoint?: StringProperty
    TokenEndpoint?: StringProperty
    UserInfoEndpoint?: StringProperty
    ClientId?: StringProperty
    ClientSecret?: StringProperty
    Scope?: StringProperty
    PublicSigningKeyEndpoint?: StringProperty
  }
}

export const AWSEC2VerifiedAccessTrustProvider = ({
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
      Type: 'AWS::EC2::VerifiedAccessTrustProvider',
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