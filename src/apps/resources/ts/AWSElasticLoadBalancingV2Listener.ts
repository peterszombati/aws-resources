import {StringProperty} from "../StringProperty"


type Properties = {
  ListenerArn?: StringProperty
  MutualAuthentication?: {
    IgnoreClientCertificateExpiry?: boolean
    Mode?: StringProperty
    TrustStoreArn?: StringProperty
    AdvertiseTrustStoreCaNames?: StringProperty
  }
  ListenerAttributes?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  AlpnPolicy?: StringProperty[]
  SslPolicy?: StringProperty
  LoadBalancerArn: StringProperty
  DefaultActions: {
    Order?: number
    TargetGroupArn?: StringProperty
    FixedResponseConfig?: {
      ContentType?: StringProperty
      StatusCode: StringProperty
      MessageBody?: StringProperty
    }
    AuthenticateCognitoConfig?: {
      OnUnauthenticatedRequest?: StringProperty
      UserPoolClientId: StringProperty
      UserPoolDomain: StringProperty
      SessionTimeout?: StringProperty
      Scope?: StringProperty
      SessionCookieName?: StringProperty
      UserPoolArn: StringProperty
      AuthenticationRequestExtraParams?: Record<string, any>
    }
    Type: StringProperty
    RedirectConfig?: {
      Path?: StringProperty
      Query?: StringProperty
      Port?: StringProperty
      Host?: StringProperty
      Protocol?: StringProperty
      StatusCode: StringProperty
    }
    ForwardConfig?: {
      TargetGroupStickinessConfig?: {
        Enabled?: boolean
        DurationSeconds?: number
      }
      TargetGroups?: {
        TargetGroupArn?: StringProperty
        Weight?: number
      }[]
    }
    AuthenticateOidcConfig?: {
      OnUnauthenticatedRequest?: StringProperty
      TokenEndpoint: StringProperty
      UseExistingClientSecret?: boolean
      SessionTimeout?: StringProperty
      Scope?: StringProperty
      Issuer: StringProperty
      ClientSecret?: StringProperty
      UserInfoEndpoint: StringProperty
      ClientId: StringProperty
      AuthorizationEndpoint: StringProperty
      SessionCookieName?: StringProperty
      AuthenticationRequestExtraParams?: Record<string, any>
    }
  }[]
  Port?: number
  Certificates?: {
    CertificateArn?: StringProperty
  }[]
  Protocol?: StringProperty
}

export const AWSElasticLoadBalancingV2Listener = ({
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
      Type: 'AWS::ElasticLoadBalancingV2::Listener',
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