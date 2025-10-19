import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ComponentName?: StringProperty
  ComponentVersion?: StringProperty
  InlineRecipe?: StringProperty
  LambdaFunction?: {
    LambdaArn?: StringProperty
    ComponentName?: StringProperty
    ComponentVersion?: StringProperty
    ComponentPlatforms?: {
      Name?: StringProperty
      Attributes?: Record<string, any>
    }[]
    ComponentDependencies?: Record<string, any>
    ComponentLambdaParameters?: {
      EventSources?: {
        Topic?: StringProperty
        Type?: (string | "PUB_SUB" | "IOT_CORE")
      }[]
      MaxQueueSize?: number
      MaxInstancesCount?: number
      MaxIdleTimeInSeconds?: number
      TimeoutInSeconds?: number
      StatusTimeoutInSeconds?: number
      Pinned?: boolean
      InputPayloadEncodingType?: (string | "json" | "binary")
      ExecArgs?: StringProperty[]
      EnvironmentVariables?: Record<string, any>
      LinuxProcessParams?: {
        IsolationMode?: (string | "GreengrassContainer" | "NoContainer")
        ContainerParams?: {
          MemorySizeInKB?: number
          MountROSysfs?: boolean
          Volumes?: {
            SourcePath?: StringProperty
            DestinationPath?: StringProperty
            Permission?: (string | "ro" | "rw")
            AddGroupOwner?: boolean
          }[]
          Devices?: {
            Path?: StringProperty
            Permission?: (string | "ro" | "rw")
            AddGroupOwner?: boolean
          }[]
        }
      }
    }
  }
  Tags?: Record<string, any>
}

export const AWSGreengrassV2ComponentVersion = ({
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
      Type: 'AWS::GreengrassV2::ComponentVersion',
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