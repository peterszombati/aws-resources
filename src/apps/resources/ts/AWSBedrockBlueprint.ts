import {StringProperty} from "../StringProperty"


type Properties = {
  BlueprintArn?: StringProperty
  BlueprintName: StringProperty
  CreationTime?: StringProperty
  LastModifiedTime?: StringProperty
  Schema: Record<string, any>
  Type: (string | "DOCUMENT" | "IMAGE" | "AUDIO" | "VIDEO")
  BlueprintStage?: (string | "DEVELOPMENT" | "LIVE")
  KmsKeyId?: StringProperty
  KmsEncryptionContext?: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSBedrockBlueprint = ({
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
      Type: 'AWS::Bedrock::Blueprint',
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