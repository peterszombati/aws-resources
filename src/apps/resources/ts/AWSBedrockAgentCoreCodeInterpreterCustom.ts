import {StringProperty} from "../StringProperty"


type Properties = {
  CodeInterpreterId?: StringProperty
  CodeInterpreterArn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  ExecutionRoleArn?: StringProperty
  NetworkConfiguration: {
    NetworkMode: (string | "PUBLIC" | "SANDBOX" | "VPC")
    VpcConfig?: {
      SecurityGroups: StringProperty[]
      Subnets: StringProperty[]
    }
  }
  Status?: (string | "CREATING" | "CREATE_FAILED" | "READY" | "DELETING" | "DELETE_FAILED" | "DELETED")
  FailureReason?: StringProperty
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  Tags?: Record<string, any>
}

export const AWSBedrockAgentCoreCodeInterpreterCustom = ({
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
      Type: 'AWS::BedrockAgentCore::CodeInterpreterCustom',
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