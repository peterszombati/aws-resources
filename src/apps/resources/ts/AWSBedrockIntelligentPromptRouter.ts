import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedAt?: StringProperty
  Description?: StringProperty
  FallbackModel: {
    ModelArn: StringProperty
  }
  Models: {
    ModelArn: StringProperty
  }[]
  PromptRouterArn?: StringProperty
  PromptRouterName: StringProperty
  RoutingCriteria: {
    ResponseQualityDifference: number
  }
  Status?: (string | "AVAILABLE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Type?: (string | "custom" | "default")
  UpdatedAt?: StringProperty
}

export const AWSBedrockIntelligentPromptRouter = ({
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
      Type: 'AWS::Bedrock::IntelligentPromptRouter',
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