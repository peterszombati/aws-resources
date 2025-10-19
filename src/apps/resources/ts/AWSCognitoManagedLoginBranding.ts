import {StringProperty} from "../StringProperty"


type Properties = {
  UserPoolId: StringProperty
  ClientId?: StringProperty
  UseCognitoProvidedValues?: boolean
  Settings?: Record<string, any>
  Assets?: {
    Category: (string | "FAVICON_ICO" | "FAVICON_SVG" | "EMAIL_GRAPHIC" | "SMS_GRAPHIC" | "AUTH_APP_GRAPHIC" | "PASSWORD_GRAPHIC" | "PASSKEY_GRAPHIC" | "PAGE_HEADER_LOGO" | "PAGE_HEADER_BACKGROUND" | "PAGE_FOOTER_LOGO" | "PAGE_FOOTER_BACKGROUND" | "PAGE_BACKGROUND" | "FORM_BACKGROUND" | "FORM_LOGO" | "IDP_BUTTON_ICON")
    ColorMode: (string | "LIGHT" | "DARK" | "DYNAMIC")
    Extension: (string | "ICO" | "JPEG" | "PNG" | "SVG" | "WEBP")
    Bytes?: StringProperty
    ResourceId?: StringProperty
  }[]
  ManagedLoginBrandingId?: StringProperty
  ReturnMergedResources?: boolean
}

export const AWSCognitoManagedLoginBranding = ({
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
      Type: 'AWS::Cognito::ManagedLoginBranding',
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