import {StringProperty} from "../StringProperty"


type Properties = {
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AdditionalInferenceSpecifications?: {
    Containers: {
      ContainerHostname?: StringProperty
      Environment?: Record<string, any>
      ModelInput?: {
        DataInputConfig: StringProperty
      }
      Image: StringProperty
      ImageDigest?: StringProperty
      ModelDataUrl?: StringProperty
      ModelDataSource?: {
        S3DataSource?: {
          S3DataType: (string | "S3Prefix" | "S3Object")
          S3Uri: StringProperty
          CompressionType: (string | "None" | "Gzip")
          ModelAccessConfig?: {
            AcceptEula: boolean
          }
        }
      }
      Framework?: StringProperty
      FrameworkVersion?: StringProperty
      NearestModelName?: StringProperty
    }[]
    Description?: StringProperty
    Name: StringProperty
    SupportedContentTypes?: StringProperty[]
    SupportedRealtimeInferenceInstanceTypes?: StringProperty[]
    SupportedResponseMIMETypes?: StringProperty[]
    SupportedTransformInstanceTypes?: StringProperty[]
  }[]
  CertifyForMarketplace?: boolean
  ClientToken?: StringProperty
  CustomerMetadataProperties?: Record<string, any>
  Domain?: StringProperty
  DriftCheckBaselines?: {
    Bias?: {
      PostTrainingConstraints?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      PreTrainingConstraints?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      ConfigFile?: {
        ContentDigest?: StringProperty
        ContentType?: StringProperty
        S3Uri: StringProperty
      }
    }
    Explainability?: {
      Constraints?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      ConfigFile?: {
        ContentDigest?: StringProperty
        ContentType?: StringProperty
        S3Uri: StringProperty
      }
    }
    ModelDataQuality?: {
      Constraints?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      Statistics?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
    }
    ModelQuality?: {
      Constraints?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      Statistics?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
    }
  }
  InferenceSpecification?: {
    Containers: {
      ContainerHostname?: StringProperty
      Environment?: Record<string, any>
      ModelInput?: {
        DataInputConfig: StringProperty
      }
      Image: StringProperty
      ImageDigest?: StringProperty
      ModelDataUrl?: StringProperty
      ModelDataSource?: {
        S3DataSource?: {
          S3DataType: (string | "S3Prefix" | "S3Object")
          S3Uri: StringProperty
          CompressionType: (string | "None" | "Gzip")
          ModelAccessConfig?: {
            AcceptEula: boolean
          }
        }
      }
      Framework?: StringProperty
      FrameworkVersion?: StringProperty
      NearestModelName?: StringProperty
    }[]
    SupportedContentTypes: StringProperty[]
    SupportedRealtimeInferenceInstanceTypes?: StringProperty[]
    SupportedResponseMIMETypes: StringProperty[]
    SupportedTransformInstanceTypes?: StringProperty[]
  }
  MetadataProperties?: {
    CommitId?: StringProperty
    GeneratedBy?: StringProperty
    ProjectId?: StringProperty
    Repository?: StringProperty
  }
  ModelApprovalStatus?: (string | "Approved" | "Rejected" | "PendingManualApproval")
  ModelMetrics?: {
    Bias?: {
      Report?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      PreTrainingReport?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      PostTrainingReport?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
    }
    Explainability?: {
      Report?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
    }
    ModelDataQuality?: {
      Constraints?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      Statistics?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
    }
    ModelQuality?: {
      Constraints?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
      Statistics?: {
        ContentDigest?: StringProperty
        ContentType: StringProperty
        S3Uri: StringProperty
      }
    }
  }
  ModelPackageDescription?: StringProperty
  ModelPackageGroupName?: StringProperty
  ModelPackageName?: StringProperty
  SamplePayloadUrl?: StringProperty
  SkipModelValidation?: (string | "None" | "All")
  SourceAlgorithmSpecification?: {
    SourceAlgorithms: {
      AlgorithmName: StringProperty
      ModelDataUrl?: StringProperty
    }[]
  }
  Task?: StringProperty
  ValidationSpecification?: {
    ValidationProfiles: {
      TransformJobDefinition: {
        Environment?: Record<string, any>
        BatchStrategy?: (string | "MultiRecord" | "SingleRecord")
        MaxConcurrentTransforms?: number
        MaxPayloadInMB?: number
        TransformInput: {
          CompressionType?: (string | "None" | "Gzip")
          ContentType?: StringProperty
          DataSource: {
            S3DataSource: {
              S3DataType: (string | "ManifestFile" | "S3Prefix" | "AugmentedManifestFile")
              S3Uri: StringProperty
            }
          }
          SplitType?: (string | "None" | "TFRecord" | "Line" | "RecordIO")
        }
        TransformOutput: {
          Accept?: StringProperty
          KmsKeyId?: StringProperty
          S3OutputPath: StringProperty
          AssembleWith?: (string | "None" | "Line")
        }
        TransformResources: {
          InstanceCount: number
          InstanceType: StringProperty
          VolumeKmsKeyId?: StringProperty
        }
      }
      ProfileName: StringProperty
    }[]
    ValidationRole: StringProperty
  }
  ModelPackageArn?: StringProperty
  ApprovalDescription?: StringProperty
  CreationTime?: StringProperty
  LastModifiedTime?: StringProperty
  ModelPackageStatus?: (string | "Pending" | "Deleting" | "InProgress" | "Completed" | "Failed")
  ModelPackageVersion?: number
  AdditionalInferenceSpecificationsToAdd?: {
    Containers: {
      ContainerHostname?: StringProperty
      Environment?: Record<string, any>
      ModelInput?: {
        DataInputConfig: StringProperty
      }
      Image: StringProperty
      ImageDigest?: StringProperty
      ModelDataUrl?: StringProperty
      ModelDataSource?: {
        S3DataSource?: {
          S3DataType: (string | "S3Prefix" | "S3Object")
          S3Uri: StringProperty
          CompressionType: (string | "None" | "Gzip")
          ModelAccessConfig?: {
            AcceptEula: boolean
          }
        }
      }
      Framework?: StringProperty
      FrameworkVersion?: StringProperty
      NearestModelName?: StringProperty
    }[]
    Description?: StringProperty
    Name: StringProperty
    SupportedContentTypes?: StringProperty[]
    SupportedRealtimeInferenceInstanceTypes?: StringProperty[]
    SupportedResponseMIMETypes?: StringProperty[]
    SupportedTransformInstanceTypes?: StringProperty[]
  }[]
  ModelPackageStatusDetails?: {
    ValidationStatuses?: {
      FailureReason?: StringProperty
      Name: StringProperty
      Status: (string | "NotStarted" | "Failed" | "InProgress" | "Completed")
    }[]
  }
  SourceUri?: StringProperty
  ModelCard?: {
    ModelCardContent: StringProperty
    ModelCardStatus: (string | "Draft" | "PendingReview" | "Approved" | "Archived")
  }
  SecurityConfig?: {
    KmsKeyId: StringProperty
  }
}

export const AWSSageMakerModelPackage = ({
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
      Type: 'AWS::SageMaker::ModelPackage',
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