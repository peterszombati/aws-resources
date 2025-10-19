import {StringProperty} from "../StringProperty"


type Properties = {
  CachePolicyConfig: {
    Comment?: StringProperty
    DefaultTTL: number
    MaxTTL: number
    MinTTL: number
    Name: StringProperty
    ParametersInCacheKeyAndForwardedToOrigin: {
      CookiesConfig: {
        CookieBehavior: StringProperty
        Cookies?: StringProperty[]
      }
      EnableAcceptEncodingBrotli?: boolean
      EnableAcceptEncodingGzip: boolean
      HeadersConfig: {
        HeaderBehavior: StringProperty
        Headers?: StringProperty[]
      }
      QueryStringsConfig: {
        QueryStringBehavior: StringProperty
        QueryStrings?: StringProperty[]
      }
    }
  }
  Id?: StringProperty
  LastModifiedTime?: StringProperty
}

export const AWSCloudFrontCachePolicy = ({
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
      Type: 'AWS::CloudFront::CachePolicy',
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