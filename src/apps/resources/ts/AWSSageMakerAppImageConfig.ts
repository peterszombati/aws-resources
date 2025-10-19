import {StringProperty} from "../StringProperty"


type Properties = {
  AppImageConfigArn?: StringProperty
  AppImageConfigName: StringProperty
  KernelGatewayImageConfig?: {
    FileSystemConfig?: {
      DefaultGid?: number
      DefaultUid?: number
      MountPath?: StringProperty
    }
    KernelSpecs: {
      DisplayName?: StringProperty
      Name: StringProperty
    }[]
  }
  JupyterLabAppImageConfig?: {
    ContainerConfig?: {
      ContainerArguments?: StringProperty[]
      ContainerEntrypoint?: StringProperty[]
      ContainerEnvironmentVariables?: {
        Value: StringProperty
        Key: StringProperty
      }[]
    }
  }
  CodeEditorAppImageConfig?: {
    ContainerConfig?: {
      ContainerArguments?: StringProperty[]
      ContainerEntrypoint?: StringProperty[]
      ContainerEnvironmentVariables?: {
        Value: StringProperty
        Key: StringProperty
      }[]
    }
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerAppImageConfig = ({
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
      Type: 'AWS::SageMaker::AppImageConfig',
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