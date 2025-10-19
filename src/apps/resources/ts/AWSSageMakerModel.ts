import {StringProperty} from "../StringProperty"


type Properties = {
  ExecutionRoleArn?: StringProperty
  EnableNetworkIsolation?: boolean
  PrimaryContainer?: {
    ImageConfig?: {
      RepositoryAuthConfig?: {
        RepositoryCredentialsProviderArn: StringProperty
      }
      RepositoryAccessMode: StringProperty
    }
    InferenceSpecificationName?: StringProperty
    ContainerHostname?: StringProperty
    ModelPackageName?: StringProperty
    Mode?: StringProperty
    Environment?: Record<string, any>
    ModelDataUrl?: StringProperty
    Image?: StringProperty
    ModelDataSource?: {
      S3DataSource: {
        ModelAccessConfig?: {
          AcceptEula: boolean
        }
        S3DataType: StringProperty
        CompressionType: StringProperty
        HubAccessConfig?: {
          HubContentArn: StringProperty
        }
        S3Uri: StringProperty
      }
    }
    MultiModelConfig?: {
      ModelCacheSetting?: StringProperty
    }
  }
  ModelName?: StringProperty
  VpcConfig?: {
    SecurityGroupIds: StringProperty[]
    Subnets: StringProperty[]
  }
  Containers?: {
    ImageConfig?: {
      RepositoryAuthConfig?: {
        RepositoryCredentialsProviderArn: StringProperty
      }
      RepositoryAccessMode: StringProperty
    }
    InferenceSpecificationName?: StringProperty
    ContainerHostname?: StringProperty
    ModelPackageName?: StringProperty
    Mode?: StringProperty
    Environment?: Record<string, any>
    ModelDataUrl?: StringProperty
    Image?: StringProperty
    ModelDataSource?: {
      S3DataSource: {
        ModelAccessConfig?: {
          AcceptEula: boolean
        }
        S3DataType: StringProperty
        CompressionType: StringProperty
        HubAccessConfig?: {
          HubContentArn: StringProperty
        }
        S3Uri: StringProperty
      }
    }
    MultiModelConfig?: {
      ModelCacheSetting?: StringProperty
    }
  }[]
  InferenceExecutionConfig?: {
    Mode: StringProperty
  }
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerModel = ({
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
      Type: 'AWS::SageMaker::Model',
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