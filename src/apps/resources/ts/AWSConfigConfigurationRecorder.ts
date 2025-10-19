import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  RecordingGroup?: {
    IncludeGlobalResourceTypes?: boolean
    ResourceTypes?: StringProperty[]
    RecordingStrategy?: {
      UseOnly: StringProperty
    }
    ExclusionByResourceTypes?: {
      ResourceTypes: StringProperty[]
    }
    AllSupported?: boolean
  }
  RecordingMode?: {
    RecordingModeOverrides?: {
      ResourceTypes: StringProperty[]
      RecordingFrequency: StringProperty
      Description?: StringProperty
    }[]
    RecordingFrequency: StringProperty
  }
  RoleARN: StringProperty
  Name?: StringProperty
}

export const AWSConfigConfigurationRecorder = ({
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
      Type: 'AWS::Config::ConfigurationRecorder',
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