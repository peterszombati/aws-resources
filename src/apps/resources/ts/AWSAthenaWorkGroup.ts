import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  WorkGroupConfiguration?: {
    BytesScannedCutoffPerQuery?: number /* schema format: int64*/
    EnforceWorkGroupConfiguration?: boolean
    PublishCloudWatchMetricsEnabled?: boolean
    RequesterPaysEnabled?: boolean
    ResultConfiguration?: {
      EncryptionConfiguration?: {
        EncryptionOption: (string | "SSE_S3" | "SSE_KMS" | "CSE_KMS")
        KmsKey?: StringProperty
      }
      OutputLocation?: StringProperty
      ExpectedBucketOwner?: StringProperty
      AclConfiguration?: {
        S3AclOption: (string | "BUCKET_OWNER_FULL_CONTROL")
      }
    }
    EngineVersion?: {
      SelectedEngineVersion?: StringProperty
      EffectiveEngineVersion?: StringProperty
    }
    AdditionalConfiguration?: StringProperty
    ExecutionRole?: StringProperty
    CustomerContentEncryptionConfiguration?: {
      KmsKey: StringProperty
    }
    ManagedQueryResultsConfiguration?: {
      EncryptionConfiguration?: {
        KmsKey?: StringProperty
      }
      Enabled?: boolean
    }
  }
  WorkGroupConfigurationUpdates?: {
    BytesScannedCutoffPerQuery?: number /* schema format: int64*/
    EnforceWorkGroupConfiguration?: boolean
    PublishCloudWatchMetricsEnabled?: boolean
    RequesterPaysEnabled?: boolean
    ResultConfigurationUpdates?: {
      EncryptionConfiguration?: {
        EncryptionOption: (string | "SSE_S3" | "SSE_KMS" | "CSE_KMS")
        KmsKey?: StringProperty
      }
      OutputLocation?: StringProperty
      ExpectedBucketOwner?: StringProperty
      AclConfiguration?: {
        S3AclOption: (string | "BUCKET_OWNER_FULL_CONTROL")
      }
      RemoveEncryptionConfiguration?: boolean
      RemoveOutputLocation?: boolean
      RemoveExpectedBucketOwner?: boolean
      RemoveAclConfiguration?: boolean
    }
    RemoveBytesScannedCutoffPerQuery?: boolean
    EngineVersion?: {
      SelectedEngineVersion?: StringProperty
      EffectiveEngineVersion?: StringProperty
    }
    AdditionalConfiguration?: StringProperty
    ExecutionRole?: StringProperty
    CustomerContentEncryptionConfiguration?: {
      KmsKey: StringProperty
    }
    RemoveCustomerContentEncryptionConfiguration?: boolean
    ManagedQueryResultsConfiguration?: {
      EncryptionConfiguration?: {
        KmsKey?: StringProperty
      }
      Enabled?: boolean
    }
  }
  CreationTime?: StringProperty
  State?: (string | "ENABLED" | "DISABLED")
  RecursiveDeleteOption?: boolean
}

export const AWSAthenaWorkGroup = ({
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
      Type: 'AWS::Athena::WorkGroup',
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