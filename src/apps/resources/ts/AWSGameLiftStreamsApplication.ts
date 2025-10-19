import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationLogOutputUri?: StringProperty
  ApplicationLogPaths?: StringProperty[]
  ApplicationSourceUri: StringProperty
  Arn?: StringProperty
  Description: StringProperty
  ExecutablePath: StringProperty
  Id?: StringProperty
  RuntimeEnvironment: {
    Version: StringProperty
    Type: StringProperty
  }
  Tags?: Record<string, any>
}

export const AWSGameLiftStreamsApplication = ({
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
      Type: 'AWS::GameLiftStreams::Application',
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