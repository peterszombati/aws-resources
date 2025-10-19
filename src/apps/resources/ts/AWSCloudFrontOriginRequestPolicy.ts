import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  LastModifiedTime?: StringProperty
  OriginRequestPolicyConfig: {
    Comment?: StringProperty
    CookiesConfig: {
      CookieBehavior: StringProperty
      Cookies?: StringProperty[]
    }
    HeadersConfig: {
      HeaderBehavior: StringProperty
      Headers?: StringProperty[]
    }
    Name: StringProperty
    QueryStringsConfig: {
      QueryStringBehavior: StringProperty
      QueryStrings?: StringProperty[]
    }
  }
}

export const AWSCloudFrontOriginRequestPolicy = ({
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
      Type: 'AWS::CloudFront::OriginRequestPolicy',
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