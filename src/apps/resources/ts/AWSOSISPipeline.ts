import {StringProperty} from "../StringProperty"


type Properties = {
  BufferOptions?: {
    PersistentBufferEnabled: boolean
  }
  EncryptionAtRestOptions?: {
    KmsKeyArn: StringProperty
  }
  LogPublishingOptions?: {
    IsLoggingEnabled?: boolean
    CloudWatchLogDestination?: {
      LogGroup: StringProperty
    }
  }
  MaxUnits: number
  MinUnits: number
  PipelineConfigurationBody: StringProperty
  PipelineName: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VpcOptions?: {
    SecurityGroupIds?: StringProperty[]
    SubnetIds: StringProperty[]
    VpcEndpointManagement?: (string | "CUSTOMER" | "SERVICE")
    VpcAttachmentOptions?: {
      AttachToVpc: boolean
      CidrBlock: StringProperty
    }
  }
  VpcEndpoints?: {
    VpcEndpointId?: StringProperty
    VpcId?: StringProperty
    VpcOptions?: {
      SecurityGroupIds?: StringProperty[]
      SubnetIds: StringProperty[]
      VpcEndpointManagement?: (string | "CUSTOMER" | "SERVICE")
      VpcAttachmentOptions?: {
        AttachToVpc: boolean
        CidrBlock: StringProperty
      }
    }
  }[]
  VpcEndpointService?: StringProperty
  PipelineArn?: StringProperty
  PipelineRoleArn?: StringProperty
  IngestEndpointUrls?: StringProperty[]
  ResourcePolicy?: {
    Policy: Record<string, any>
  }
}

export const AWSOSISPipeline = ({
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
      Type: 'AWS::OSIS::Pipeline',
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