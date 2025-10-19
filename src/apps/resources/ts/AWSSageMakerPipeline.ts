import {StringProperty} from "../StringProperty"


type Properties = {
  PipelineName: StringProperty
  PipelineDisplayName?: StringProperty
  PipelineDescription?: StringProperty
  PipelineDefinition: Record<string, any>
  RoleArn: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  ParallelismConfiguration?: {
    MaxParallelExecutionSteps: number
  }
}

export const AWSSageMakerPipeline = ({
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
      Type: 'AWS::SageMaker::Pipeline',
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