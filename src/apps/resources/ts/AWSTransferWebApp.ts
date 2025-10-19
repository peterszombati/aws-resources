import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  WebAppId?: StringProperty
  IdentityProviderDetails: {
    ApplicationArn?: StringProperty
    InstanceArn?: StringProperty
    Role?: StringProperty
  }
  AccessEndpoint?: StringProperty
  WebAppUnits?: any
  WebAppCustomization?: {
    Title?: StringProperty
    LogoFile?: StringProperty
    FaviconFile?: StringProperty
  }
  WebAppEndpointPolicy?: (string | "STANDARD" | "FIPS")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSTransferWebApp = ({
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
      Type: 'AWS::Transfer::WebApp',
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