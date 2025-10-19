import {StringProperty} from "../StringProperty"


type Properties = {
  ConfigurationProfileId: StringProperty
  Description?: StringProperty
  ContentType: StringProperty
  LatestVersionNumber?: number
  Content: StringProperty
  VersionLabel?: StringProperty
  ApplicationId: StringProperty
  VersionNumber?: StringProperty
}

export const AWSAppConfigHostedConfigurationVersion = ({
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
      Type: 'AWS::AppConfig::HostedConfigurationVersion',
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