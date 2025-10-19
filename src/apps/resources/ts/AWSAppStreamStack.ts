import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  StorageConnectors?: {
    Domains?: StringProperty[]
    ResourceIdentifier?: StringProperty
    ConnectorType: StringProperty
  }[]
  DeleteStorageConnectors?: boolean
  EmbedHostDomains?: StringProperty[]
  UserSettings?: {
    Permission: StringProperty
    Action: StringProperty
    MaximumLength?: number
  }[]
  AttributesToDelete?: StringProperty[]
  RedirectURL?: StringProperty
  StreamingExperienceSettings?: {
    PreferredProtocol?: StringProperty
  }
  Name?: StringProperty
  FeedbackURL?: StringProperty
  ApplicationSettings?: {
    SettingsGroup?: StringProperty
    Enabled: boolean
  }
  DisplayName?: StringProperty
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  AccessEndpoints?: {
    EndpointType: StringProperty
    VpceId: StringProperty
  }[]
}

export const AWSAppStreamStack = ({
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
      Type: 'AWS::AppStream::Stack',
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