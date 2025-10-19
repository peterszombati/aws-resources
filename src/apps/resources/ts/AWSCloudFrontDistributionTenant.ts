import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  DistributionId: StringProperty
  Name: StringProperty
  Arn?: StringProperty
  DomainResults?: {
    Domain?: StringProperty
    Status?: (string | "active" | "inactive")
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Customizations?: {
    WebAcl?: {
      Action?: (string | "override" | "disable")
      Arn?: StringProperty
    }
    Certificate?: {
      Arn?: StringProperty
    }
    GeoRestrictions?: {
      RestrictionType?: (string | "blacklist" | "whitelist" | "none")
      Locations?: StringProperty[]
    }
  }
  Parameters?: {
    Name?: StringProperty
    Value?: StringProperty
  }[]
  ConnectionGroupId?: StringProperty
  CreatedTime?: StringProperty
  LastModifiedTime?: StringProperty
  Enabled?: boolean
  Status?: StringProperty
  ETag?: StringProperty
  Domains: StringProperty[]
  ManagedCertificateRequest?: {
    ValidationTokenHost?: (string | "cloudfront" | "self-hosted")
    PrimaryDomainName?: StringProperty
    CertificateTransparencyLoggingPreference?: (string | "enabled" | "disabled")
  }
}

export const AWSCloudFrontDistributionTenant = ({
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
      Type: 'AWS::CloudFront::DistributionTenant',
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