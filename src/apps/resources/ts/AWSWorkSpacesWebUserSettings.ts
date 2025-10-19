import {StringProperty} from "../StringProperty"


type Properties = {
  AdditionalEncryptionContext?: Record<string, any>
  AssociatedPortalArns?: StringProperty[]
  CookieSynchronizationConfiguration?: {
    Allowlist: {
      Domain: StringProperty
      Name?: StringProperty
      Path?: StringProperty
    }[]
    Blocklist?: {
      Domain: StringProperty
      Name?: StringProperty
      Path?: StringProperty
    }[]
  }
  CopyAllowed: (string | "Disabled" | "Enabled")
  CustomerManagedKey?: StringProperty
  DisconnectTimeoutInMinutes?: number
  DownloadAllowed: (string | "Disabled" | "Enabled")
  IdleDisconnectTimeoutInMinutes?: number
  PasteAllowed: (string | "Disabled" | "Enabled")
  PrintAllowed: (string | "Disabled" | "Enabled")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ToolbarConfiguration?: {
    ToolbarType?: (string | "Floating" | "Docked")
    VisualMode?: (string | "Dark" | "Light")
    HiddenToolbarItems?: (string | "Windows" | "DualMonitor" | "FullScreen" | "Webcam" | "Microphone")[]
    MaxDisplayResolution?: (string | "size4096X2160" | "size3840X2160" | "size3440X1440" | "size2560X1440" | "size1920X1080" | "size1280X720" | "size1024X768" | "size800X600")
  }
  UploadAllowed: (string | "Disabled" | "Enabled")
  UserSettingsArn?: StringProperty
  DeepLinkAllowed?: (string | "Disabled" | "Enabled")
}

export const AWSWorkSpacesWebUserSettings = ({
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
      Type: 'AWS::WorkSpacesWeb::UserSettings',
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