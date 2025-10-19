import {StringProperty} from "../StringProperty"


type Properties = {
  PoolId?: StringProperty
  PoolArn?: StringProperty
  Capacity: {
    DesiredUserSessions: number
  }
  PoolName: StringProperty
  Description?: StringProperty
  CreatedAt?: StringProperty
  BundleId: StringProperty
  DirectoryId: StringProperty
  ApplicationSettings?: {
    Status: (string | "DISABLED" | "ENABLED")
    SettingsGroup?: StringProperty
  }
  TimeoutSettings?: {
    DisconnectTimeoutInSeconds?: number
    IdleDisconnectTimeoutInSeconds?: number
    MaxUserDurationInSeconds?: number
  }
  RunningMode?: (string | "ALWAYS_ON" | "AUTO_STOP")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWorkSpacesWorkspacesPool = ({
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
      Type: 'AWS::WorkSpaces::WorkspacesPool',
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