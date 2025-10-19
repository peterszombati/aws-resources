import {StringProperty} from "../StringProperty"


type Properties = {
  ListenerArn?: StringProperty
  IsDefault?: boolean
  Actions: {
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
      SessionTimeout?: number
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
      SessionTimeout?: number
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
  Priority: number
  RuleArn?: StringProperty
  Transforms?: {
    Type: StringProperty
    UrlRewriteConfig?: {
      Rewrites: {
        Replace: StringProperty
        Regex: StringProperty
      }[]
    }
    HostHeaderRewriteConfig?: {
      Rewrites: {
        Replace: StringProperty
        Regex: StringProperty
      }[]
    }
  }[]
  Conditions: {
    Field?: StringProperty
    HttpHeaderConfig?: {
      Values?: StringProperty[]
      RegexValues?: StringProperty[]
      HttpHeaderName?: StringProperty
    }
    Values?: StringProperty[]
    QueryStringConfig?: {
      Values?: {
        Value?: StringProperty
        Key?: StringProperty
      }[]
    }
    RegexValues?: StringProperty[]
    HostHeaderConfig?: {
      Values?: StringProperty[]
      RegexValues?: StringProperty[]
    }
    HttpRequestMethodConfig?: {
      Values?: StringProperty[]
    }
    PathPatternConfig?: {
      Values?: StringProperty[]
      RegexValues?: StringProperty[]
    }
    SourceIpConfig?: {
      Values?: StringProperty[]
    }
  }[]
}

export const AWSElasticLoadBalancingV2ListenerRule = ({
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
      Type: 'AWS::ElasticLoadBalancingV2::ListenerRule',
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