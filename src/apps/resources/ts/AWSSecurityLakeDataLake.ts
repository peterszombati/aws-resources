import {StringProperty} from "../StringProperty"


type Properties = {
  EncryptionConfiguration?: {
    KmsKeyId?: StringProperty
  }
  LifecycleConfiguration?: {
    Expiration?: {
      Days?: number
    }
    Transitions?: {
      Days?: number
      StorageClass?: StringProperty
    }[]
  }
  ReplicationConfiguration?: {
    Regions?: StringProperty[]
    RoleArn?: StringProperty
  }
  MetaStoreManagerRoleArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  S3BucketArn?: StringProperty
}

export const AWSSecurityLakeDataLake = ({
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
      Type: 'AWS::SecurityLake::DataLake',
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