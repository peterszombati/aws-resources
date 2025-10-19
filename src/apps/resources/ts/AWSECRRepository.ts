import {StringProperty} from "../StringProperty"


type Properties = {
  EmptyOnDelete?: boolean
  LifecyclePolicy?: {
    LifecyclePolicyText?: StringProperty
    RegistryId?: StringProperty
  }
  RepositoryName?: StringProperty
  RepositoryPolicyText?: Record<string, any> | StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  RepositoryUri?: StringProperty
  ImageTagMutability?: (string | "MUTABLE" | "IMMUTABLE" | "MUTABLE_WITH_EXCLUSION" | "IMMUTABLE_WITH_EXCLUSION")
  ImageTagMutabilityExclusionFilters?: {
    ImageTagMutabilityExclusionFilterType: (string | "WILDCARD")
    ImageTagMutabilityExclusionFilterValue: StringProperty
  }[]
  ImageScanningConfiguration?: {
    ScanOnPush?: boolean
  }
  EncryptionConfiguration?: {
    EncryptionType: (string | "AES256" | "KMS" | "KMS_DSSE")
    KmsKey?: StringProperty
  }
}

export const AWSECRRepository = ({
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
      Type: 'AWS::ECR::Repository',
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