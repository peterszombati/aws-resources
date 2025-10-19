import {StringProperty} from "../StringProperty"


type Properties = {
  DistributionConfig: {
    Aliases?: StringProperty[]
    AnycastIpListId?: StringProperty
    CNAMEs?: StringProperty[]
    CacheBehaviors?: {
      AllowedMethods?: StringProperty[]
      CachePolicyId?: StringProperty
      CachedMethods?: StringProperty[]
      Compress?: boolean
      DefaultTTL?: number
      FieldLevelEncryptionId?: StringProperty
      ForwardedValues?: {
        Cookies?: {
          Forward: StringProperty
          WhitelistedNames?: StringProperty[]
        }
        Headers?: StringProperty[]
        QueryString: boolean
        QueryStringCacheKeys?: StringProperty[]
      }
      FunctionAssociations?: {
        EventType?: StringProperty
        FunctionARN?: StringProperty
      }[]
      GrpcConfig?: {
        Enabled: boolean
      }
      LambdaFunctionAssociations?: {
        EventType?: StringProperty
        IncludeBody?: boolean
        LambdaFunctionARN?: StringProperty
      }[]
      MaxTTL?: number
      MinTTL?: number
      OriginRequestPolicyId?: StringProperty
      PathPattern: StringProperty
      RealtimeLogConfigArn?: StringProperty
      ResponseHeadersPolicyId?: StringProperty
      SmoothStreaming?: boolean
      TargetOriginId: StringProperty
      TrustedKeyGroups?: StringProperty[]
      TrustedSigners?: StringProperty[]
      ViewerProtocolPolicy: StringProperty
    }[]
    Comment?: StringProperty
    ConnectionMode?: (string | "direct" | "tenant-only")
    ContinuousDeploymentPolicyId?: StringProperty
    CustomErrorResponses?: {
      ErrorCachingMinTTL?: number
      ErrorCode: number
      ResponseCode?: number
      ResponsePagePath?: StringProperty
    }[]
    CustomOrigin?: {
      DNSName: StringProperty
      HTTPPort?: number
      HTTPSPort?: number
      OriginProtocolPolicy: StringProperty
      OriginSSLProtocols: StringProperty[]
    }
    DefaultCacheBehavior: {
      AllowedMethods?: StringProperty[]
      CachePolicyId?: StringProperty
      CachedMethods?: StringProperty[]
      Compress?: boolean
      DefaultTTL?: number
      FieldLevelEncryptionId?: StringProperty
      ForwardedValues?: {
        Cookies?: {
          Forward: StringProperty
          WhitelistedNames?: StringProperty[]
        }
        Headers?: StringProperty[]
        QueryString: boolean
        QueryStringCacheKeys?: StringProperty[]
      }
      FunctionAssociations?: {
        EventType?: StringProperty
        FunctionARN?: StringProperty
      }[]
      GrpcConfig?: {
        Enabled: boolean
      }
      LambdaFunctionAssociations?: {
        EventType?: StringProperty
        IncludeBody?: boolean
        LambdaFunctionARN?: StringProperty
      }[]
      MaxTTL?: number
      MinTTL?: number
      OriginRequestPolicyId?: StringProperty
      RealtimeLogConfigArn?: StringProperty
      ResponseHeadersPolicyId?: StringProperty
      SmoothStreaming?: boolean
      TargetOriginId: StringProperty
      TrustedKeyGroups?: StringProperty[]
      TrustedSigners?: StringProperty[]
      ViewerProtocolPolicy: StringProperty
    }
    DefaultRootObject?: StringProperty
    Enabled: boolean
    HttpVersion?: StringProperty
    IPV6Enabled?: boolean
    Logging?: {
      Bucket?: StringProperty
      IncludeCookies?: boolean
      Prefix?: StringProperty
    }
    OriginGroups?: {
      Items?: {
        FailoverCriteria: {
          StatusCodes: {
            Items: number[]
            Quantity: number
          }
        }
        Id: StringProperty
        Members: {
          Items: {
            OriginId: StringProperty
          }[]
          Quantity: number
        }
        SelectionCriteria?: (string | "default" | "media-quality-based")
      }[]
      Quantity: number
    }
    Origins?: {
      ConnectionAttempts?: number
      ConnectionTimeout?: number
      ResponseCompletionTimeout?: number
      CustomOriginConfig?: {
        HTTPPort?: number
        HTTPSPort?: number
        OriginKeepaliveTimeout?: number
        OriginProtocolPolicy: StringProperty
        OriginReadTimeout?: number
        OriginSSLProtocols?: StringProperty[]
        IpAddressType?: (string | "ipv4" | "ipv6" | "dualstack")
      }
      DomainName: StringProperty
      Id: StringProperty
      OriginAccessControlId?: StringProperty
      OriginCustomHeaders?: {
        HeaderName: StringProperty
        HeaderValue: StringProperty
      }[]
      OriginPath?: StringProperty
      OriginShield?: {
        Enabled?: boolean
        OriginShieldRegion?: StringProperty
      }
      S3OriginConfig?: {
        OriginAccessIdentity?: StringProperty
        OriginReadTimeout?: number
      }
      VpcOriginConfig?: {
        OriginKeepaliveTimeout?: number
        OriginReadTimeout?: number
        VpcOriginId: StringProperty
      }
    }[]
    PriceClass?: StringProperty
    Restrictions?: {
      GeoRestriction: {
        Locations?: StringProperty[]
        RestrictionType: StringProperty
      }
    }
    S3Origin?: {
      DNSName: StringProperty
      OriginAccessIdentity?: StringProperty
    }
    Staging?: boolean
    TenantConfig?: {
      ParameterDefinitions?: {
        Name: StringProperty
        Definition: {
          StringSchema?: {
            Comment?: StringProperty
            DefaultValue?: StringProperty
            Required: boolean
          }
        }
      }[]
    }
    ViewerCertificate?: {
      AcmCertificateArn?: StringProperty
      CloudFrontDefaultCertificate?: boolean
      IamCertificateId?: StringProperty
      MinimumProtocolVersion?: StringProperty
      SslSupportMethod?: StringProperty
    }
    WebACLId?: StringProperty
  }
  DomainName?: StringProperty
  Id?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCloudFrontDistribution = ({
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
      Type: 'AWS::CloudFront::Distribution',
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