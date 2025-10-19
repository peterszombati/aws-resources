import {StringProperty} from "../StringProperty"


type Properties = {
  PipelineTags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  ParameterObjects: {
    Attributes: {
      StringValue: StringProperty
      Key: StringProperty
    }[]
    Id: StringProperty
  }[]
  Description?: StringProperty
  Activate?: boolean
  PipelineObjects?: {
    Fields: {
      RefValue?: StringProperty
      StringValue?: StringProperty
      Key: StringProperty
    }[]
    Id: StringProperty
    Name: StringProperty
  }[]
  Id?: StringProperty
  ParameterValues?: {
    StringValue: StringProperty
    Id: StringProperty
  }[]
  Name: StringProperty
}

export const AWSDataPipelinePipeline = ({
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
      Type: 'AWS::DataPipeline::Pipeline',
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