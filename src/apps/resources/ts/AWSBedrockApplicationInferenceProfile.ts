import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedAt?: StringProperty
  Description?: StringProperty
  InferenceProfileArn?: StringProperty
  InferenceProfileId?: StringProperty
  InferenceProfileIdentifier?: StringProperty
  InferenceProfileName: StringProperty
  ModelSource?: any
  Models?: {
    ModelArn?: StringProperty
  }[]
  Status?: (string | "ACTIVE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Type?: (string | "APPLICATION" | "SYSTEM_DEFINED")
  UpdatedAt?: StringProperty
}

export const AWSBedrockApplicationInferenceProfile = ({
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
      Type: 'AWS::Bedrock::ApplicationInferenceProfile',
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