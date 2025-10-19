import {StringProperty} from "../StringProperty"


type Properties = {
  OnStart?: {
    Content?: StringProperty
  }[]
  Id?: StringProperty
  NotebookInstanceLifecycleConfigName?: StringProperty
  OnCreate?: {
    Content?: StringProperty
  }[]
}

export const AWSSageMakerNotebookInstanceLifecycleConfig = ({
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
      Type: 'AWS::SageMaker::NotebookInstanceLifecycleConfig',
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