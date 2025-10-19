import {StringProperty} from "../StringProperty"


type Properties = {
  Prefix: StringProperty
  Description?: StringProperty
  ImageTagMutability?: (string | "MUTABLE" | "IMMUTABLE" | "IMMUTABLE_WITH_EXCLUSION" | "MUTABLE_WITH_EXCLUSION")
  ImageTagMutabilityExclusionFilters?: {
    ImageTagMutabilityExclusionFilterType: (string | "WILDCARD")
    ImageTagMutabilityExclusionFilterValue: StringProperty
  }[]
  RepositoryPolicy?: StringProperty
  LifecyclePolicy?: StringProperty
  EncryptionConfiguration?: {
    EncryptionType: (string | "AES256" | "KMS" | "KMS_DSSE")
    KmsKey?: StringProperty
  }
  ResourceTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AppliedFor: (string | "REPLICATION" | "PULL_THROUGH_CACHE")[]
  CustomRoleArn?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
}

export const AWSECRRepositoryCreationTemplate = ({
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
      Type: 'AWS::ECR::RepositoryCreationTemplate',
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