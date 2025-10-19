import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  LastModifiedTime?: StringProperty
  ResponseHeadersPolicyConfig: {
    Comment?: StringProperty
    CorsConfig?: {
      AccessControlAllowCredentials: boolean
      AccessControlAllowHeaders: {
        Items: StringProperty[]
      }
      AccessControlAllowMethods: {
        Items: StringProperty[]
      }
      AccessControlAllowOrigins: {
        Items: StringProperty[]
      }
      AccessControlExposeHeaders?: {
        Items: StringProperty[]
      }
      AccessControlMaxAgeSec?: number
      OriginOverride: boolean
    }
    CustomHeadersConfig?: {
      Items: {
        Header: StringProperty
        Override: boolean
        Value: StringProperty
      }[]
    }
    Name: StringProperty
    RemoveHeadersConfig?: {
      Items: {
        Header: StringProperty
      }[]
    }
    SecurityHeadersConfig?: {
      ContentSecurityPolicy?: {
        ContentSecurityPolicy: StringProperty
        Override: boolean
      }
      ContentTypeOptions?: {
        Override: boolean
      }
      FrameOptions?: {
        FrameOption: StringProperty
        Override: boolean
      }
      ReferrerPolicy?: {
        Override: boolean
        ReferrerPolicy: StringProperty
      }
      StrictTransportSecurity?: {
        AccessControlMaxAgeSec: number
        IncludeSubdomains?: boolean
        Override: boolean
        Preload?: boolean
      }
      XSSProtection?: {
        ModeBlock?: boolean
        Override: boolean
        Protection: boolean
        ReportUri?: StringProperty
      }
    }
    ServerTimingHeadersConfig?: {
      Enabled: boolean
      SamplingRate?: number
    }
  }
}

export const AWSCloudFrontResponseHeadersPolicy = ({
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
      Type: 'AWS::CloudFront::ResponseHeadersPolicy',
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