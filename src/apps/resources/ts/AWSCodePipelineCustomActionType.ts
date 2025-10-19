import {StringProperty} from "../StringProperty"


type Properties = {
  Category: StringProperty
  ConfigurationProperties?: {
    Description?: StringProperty
    Key: boolean
    Name: StringProperty
    Queryable?: boolean
    Required: boolean
    Secret: boolean
    Type?: StringProperty
  }[]
  InputArtifactDetails: {
    MaximumCount: number
    MinimumCount: number
  }
  OutputArtifactDetails: {
    MaximumCount: number
    MinimumCount: number
  }
  Provider: StringProperty
  Settings?: {
    EntityUrlTemplate?: StringProperty
    ExecutionUrlTemplate?: StringProperty
    RevisionUrlTemplate?: StringProperty
    ThirdPartyConfigurationUrl?: StringProperty
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Version: StringProperty
  Id?: StringProperty
}

export const AWSCodePipelineCustomActionType = ({
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
      Type: 'AWS::CodePipeline::CustomActionType',
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