import {StringProperty} from "../StringProperty"


type Properties = {
  IdentityProviderArn?: StringProperty
  IdentityProviderDetails: Record<string, any>
  IdentityProviderName: StringProperty
  IdentityProviderType: (string | "SAML" | "Facebook" | "Google" | "LoginWithAmazon" | "SignInWithApple" | "OIDC")
  PortalArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWorkSpacesWebIdentityProvider = ({
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
      Type: 'AWS::WorkSpacesWeb::IdentityProvider',
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