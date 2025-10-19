import {StringProperty} from "../StringProperty"


type Properties = {
  StudioLifecycleConfigArn?: StringProperty
  StudioLifecycleConfigAppType: (string | "JupyterServer" | "KernelGateway" | "CodeEditor" | "JupyterLab")
  StudioLifecycleConfigContent: StringProperty
  StudioLifecycleConfigName: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerStudioLifecycleConfig = ({
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
      Type: 'AWS::SageMaker::StudioLifecycleConfig',
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