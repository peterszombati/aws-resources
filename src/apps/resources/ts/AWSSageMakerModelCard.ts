import {StringProperty} from "../StringProperty"


type Properties = {
  ModelCardArn?: StringProperty
  ModelCardVersion?: number
  ModelCardName: StringProperty
  SecurityConfig?: {
    KmsKeyId?: StringProperty
  }
  ModelCardStatus: (string | "Draft" | "PendingReview" | "Approved" | "Archived")
  Content: {
    ModelOverview?: {
      ModelDescription?: StringProperty
      ModelOwner?: StringProperty
      ModelCreator?: StringProperty
      ProblemType?: StringProperty
      AlgorithmType?: StringProperty
      ModelId?: StringProperty
      ModelArtifact?: StringProperty[]
      ModelName?: StringProperty
      ModelVersion?: number
      InferenceEnvironment?: {
        ContainerImage?: StringProperty[]
      }
    }
    ModelPackageDetails?: {
      ModelPackageDescription?: StringProperty
      ModelPackageArn?: StringProperty
      CreatedBy?: {
        UserProfileName?: StringProperty
      }
      ModelPackageStatus?: (string | "Pending" | "InProgress" | "Completed" | "Failed" | "Deleting")
      ModelApprovalStatus?: (string | "Approved" | "Rejected" | "PendingManualApproval")
      ApprovalDescription?: StringProperty
      ModelPackageGroupName?: StringProperty
      ModelPackageName?: StringProperty
      ModelPackageVersion?: number
      Domain?: StringProperty
      Task?: StringProperty
      SourceAlgorithms?: {
        AlgorithmName: StringProperty
        ModelDataUrl?: StringProperty
      }[]
      InferenceSpecification?: {
        Containers: {
          ModelDataUrl?: StringProperty
          Image: StringProperty
          NearestModelName?: StringProperty
        }[]
      }
    }
    IntendedUses?: {
      PurposeOfModel?: StringProperty
      IntendedUses?: StringProperty
      FactorsAffectingModelEfficiency?: StringProperty
      RiskRating?: (string | "High" | "Medium" | "Low" | "Unknown")
      ExplanationsForRiskRating?: StringProperty
    }
    BusinessDetails?: {
      BusinessProblem?: StringProperty
      BusinessStakeholders?: StringProperty
      LineOfBusiness?: StringProperty
    }
    TrainingDetails?: {
      ObjectiveFunction?: {
        Function?: {
          Function?: (string | "Maximize" | "Minimize")
          Facet?: StringProperty
          Condition?: StringProperty
        }
        Notes?: StringProperty
      }
      TrainingObservations?: StringProperty
      TrainingJobDetails?: {
        TrainingArn?: StringProperty
        TrainingDatasets?: StringProperty[]
        TrainingEnvironment?: {
          ContainerImage?: StringProperty[]
        }
        TrainingMetrics?: {
          Name: StringProperty
          Notes?: StringProperty
          Value: number
        }[]
        UserProvidedTrainingMetrics?: {
          Name: StringProperty
          Notes?: StringProperty
          Value: number
        }[]
        HyperParameters?: {
          Name: StringProperty
          Value: StringProperty
        }[]
        UserProvidedHyperParameters?: {
          Name: StringProperty
          Value: StringProperty
        }[]
      }
    }
    EvaluationDetails?: {
      Name: StringProperty
      EvaluationObservation?: StringProperty
      EvaluationJobArn?: StringProperty
      Datasets?: StringProperty[]
      Metadata?: Record<string, any>
      MetricGroups?: {
        Name: StringProperty
        MetricData: any[]
      }[]
    }[]
    AdditionalInformation?: {
      EthicalConsiderations?: StringProperty
      CaveatsAndRecommendations?: StringProperty
      CustomDetails?: Record<string, any>
    }
  }
  CreationTime?: StringProperty
  CreatedBy?: {
    UserProfileArn?: StringProperty
    UserProfileName?: StringProperty
    DomainId?: StringProperty
  }
  LastModifiedTime?: StringProperty
  LastModifiedBy?: {
    UserProfileArn?: StringProperty
    UserProfileName?: StringProperty
    DomainId?: StringProperty
  }
  ModelCardProcessingStatus?: (string | "UnsetValue" | "DeleteInProgress" | "DeletePending" | "ContentDeleted" | "ExportJobsDeleted" | "DeleteCompleted" | "DeleteFailed")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSageMakerModelCard = ({
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
      Type: 'AWS::SageMaker::ModelCard',
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