import {StringProperty} from "../StringProperty"


type Properties = {
  ClusterSettings?: {
    Value?: StringProperty
    Name?: StringProperty
  }[]
  DefaultCapacityProviderStrategy?: {
    CapacityProvider?: StringProperty
    Weight?: number
    Base?: number
  }[]
  Configuration?: {
    ManagedStorageConfiguration?: {
      FargateEphemeralStorageKmsKeyId?: StringProperty
      KmsKeyId?: StringProperty
    }
    ExecuteCommandConfiguration?: {
      Logging?: StringProperty
      KmsKeyId?: StringProperty
      LogConfiguration?: {
        S3EncryptionEnabled?: boolean
        CloudWatchEncryptionEnabled?: boolean
        CloudWatchLogGroupName?: StringProperty
        S3KeyPrefix?: StringProperty
        S3BucketName?: StringProperty
      }
    }
  }
  ServiceConnectDefaults?: {
    Namespace?: StringProperty
  }
  CapacityProviders?: StringProperty[]
  ClusterName?: StringProperty
  Arn?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
}

export const AWSECSCluster = ({
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
      Type: 'AWS::ECS::Cluster',
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