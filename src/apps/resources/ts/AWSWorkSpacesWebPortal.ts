import {StringProperty} from "../StringProperty"


type Properties = {
  AdditionalEncryptionContext?: Record<string, any>
  AuthenticationType?: (string | "Standard" | "IAM_Identity_Center")
  BrowserSettingsArn?: StringProperty
  BrowserType?: (string | "Chrome")
  CreationDate?: StringProperty
  CustomerManagedKey?: StringProperty
  DataProtectionSettingsArn?: StringProperty
  DisplayName?: StringProperty
  InstanceType?: (string | "standard.regular" | "standard.large" | "standard.xlarge")
  IpAccessSettingsArn?: StringProperty
  MaxConcurrentSessions?: number
  NetworkSettingsArn?: StringProperty
  PortalArn?: StringProperty
  PortalEndpoint?: StringProperty
  PortalStatus?: (string | "Incomplete" | "Pending" | "Active")
  RendererType?: (string | "AppStream")
  ServiceProviderSamlMetadata?: StringProperty
  SessionLoggerArn?: StringProperty
  StatusReason?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TrustStoreArn?: StringProperty
  UserAccessLoggingSettingsArn?: StringProperty
  UserSettingsArn?: StringProperty
}

export const AWSWorkSpacesWebPortal = ({
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
      Type: 'AWS::WorkSpacesWeb::Portal',
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