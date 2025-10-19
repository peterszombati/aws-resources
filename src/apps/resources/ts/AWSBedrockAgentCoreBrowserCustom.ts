import {StringProperty} from "../StringProperty"


type Properties = {
  BrowserId?: StringProperty
  BrowserArn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  NetworkConfiguration: {
    NetworkMode: (string | "PUBLIC" | "VPC")
    VpcConfig?: {
      SecurityGroups: StringProperty[]
      Subnets: StringProperty[]
    }
  }
  RecordingConfig?: {
    Enabled?: boolean
    S3Location?: {
      Bucket: StringProperty
      Prefix: StringProperty
    }
  }
  ExecutionRoleArn?: StringProperty
  Status?: (string | "CREATING" | "CREATE_FAILED" | "READY" | "DELETING" | "DELETE_FAILED" | "DELETED")
  FailureReason?: StringProperty
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  Tags?: Record<string, any>
}

export const AWSBedrockAgentCoreBrowserCustom = ({
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
      Type: 'AWS::BedrockAgentCore::BrowserCustom',
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