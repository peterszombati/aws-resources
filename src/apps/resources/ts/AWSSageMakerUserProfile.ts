import {StringProperty} from "../StringProperty"


type Properties = {
  UserProfileArn?: StringProperty
  DomainId: StringProperty
  SingleSignOnUserIdentifier?: StringProperty
  SingleSignOnUserValue?: StringProperty
  UserProfileName: StringProperty
  UserSettings?: {
    ExecutionRole?: StringProperty
    AutoMountHomeEFS?: (string | "Enabled" | "Disabled" | "DefaultAsDomain")
    JupyterServerAppSettings?: {
      DefaultResourceSpec?: {
        InstanceType?: (string | "system" | "ml.t3.micro" | "ml.t3.small" | "ml.t3.medium" | "ml.t3.large" | "ml.t3.xlarge" | "ml.t3.2xlarge" | "ml.m5.large" | "ml.m5.xlarge" | "ml.m5.2xlarge" | "ml.m5.4xlarge" | "ml.m5.8xlarge" | "ml.m5.12xlarge" | "ml.m5.16xlarge" | "ml.m5.24xlarge" | "ml.c5.large" | "ml.c5.xlarge" | "ml.c5.2xlarge" | "ml.c5.4xlarge" | "ml.c5.9xlarge" | "ml.c5.12xlarge" | "ml.c5.18xlarge" | "ml.c5.24xlarge" | "ml.p3.2xlarge" | "ml.p3.8xlarge" | "ml.p3.16xlarge" | "ml.g4dn.xlarge" | "ml.g4dn.2xlarge" | "ml.g4dn.4xlarge" | "ml.g4dn.8xlarge" | "ml.g4dn.12xlarge" | "ml.g4dn.16xlarge" | "ml.r5.large" | "ml.r5.xlarge" | "ml.r5.2xlarge" | "ml.r5.4xlarge" | "ml.r5.8xlarge" | "ml.r5.12xlarge" | "ml.r5.16xlarge" | "ml.r5.24xlarge" | "ml.p3dn.24xlarge" | "ml.m5d.large" | "ml.m5d.xlarge" | "ml.m5d.2xlarge" | "ml.m5d.4xlarge" | "ml.m5d.8xlarge" | "ml.m5d.12xlarge" | "ml.m5d.16xlarge" | "ml.m5d.24xlarge" | "ml.g5.xlarge" | "ml.g5.2xlarge" | "ml.g5.4xlarge" | "ml.g5.8xlarge" | "ml.g5.12xlarge" | "ml.g5.16xlarge" | "ml.g5.24xlarge" | "ml.g5.48xlarge" | "ml.p4d.24xlarge" | "ml.p4de.24xlarge" | "ml.geospatial.interactive" | "ml.trn1.2xlarge" | "ml.trn1.32xlarge" | "ml.trn1n.32xlarge")
        SageMakerImageArn?: StringProperty
        SageMakerImageVersionArn?: StringProperty
        LifecycleConfigArn?: StringProperty
      }
      LifecycleConfigArns?: StringProperty[]
    }
    KernelGatewayAppSettings?: {
      CustomImages?: {
        AppImageConfigName: StringProperty
        ImageName: StringProperty
        ImageVersionNumber?: number
      }[]
      DefaultResourceSpec?: {
        InstanceType?: (string | "system" | "ml.t3.micro" | "ml.t3.small" | "ml.t3.medium" | "ml.t3.large" | "ml.t3.xlarge" | "ml.t3.2xlarge" | "ml.m5.large" | "ml.m5.xlarge" | "ml.m5.2xlarge" | "ml.m5.4xlarge" | "ml.m5.8xlarge" | "ml.m5.12xlarge" | "ml.m5.16xlarge" | "ml.m5.24xlarge" | "ml.c5.large" | "ml.c5.xlarge" | "ml.c5.2xlarge" | "ml.c5.4xlarge" | "ml.c5.9xlarge" | "ml.c5.12xlarge" | "ml.c5.18xlarge" | "ml.c5.24xlarge" | "ml.p3.2xlarge" | "ml.p3.8xlarge" | "ml.p3.16xlarge" | "ml.g4dn.xlarge" | "ml.g4dn.2xlarge" | "ml.g4dn.4xlarge" | "ml.g4dn.8xlarge" | "ml.g4dn.12xlarge" | "ml.g4dn.16xlarge" | "ml.r5.large" | "ml.r5.xlarge" | "ml.r5.2xlarge" | "ml.r5.4xlarge" | "ml.r5.8xlarge" | "ml.r5.12xlarge" | "ml.r5.16xlarge" | "ml.r5.24xlarge" | "ml.p3dn.24xlarge" | "ml.m5d.large" | "ml.m5d.xlarge" | "ml.m5d.2xlarge" | "ml.m5d.4xlarge" | "ml.m5d.8xlarge" | "ml.m5d.12xlarge" | "ml.m5d.16xlarge" | "ml.m5d.24xlarge" | "ml.g5.xlarge" | "ml.g5.2xlarge" | "ml.g5.4xlarge" | "ml.g5.8xlarge" | "ml.g5.12xlarge" | "ml.g5.16xlarge" | "ml.g5.24xlarge" | "ml.g5.48xlarge" | "ml.p4d.24xlarge" | "ml.p4de.24xlarge" | "ml.geospatial.interactive" | "ml.trn1.2xlarge" | "ml.trn1.32xlarge" | "ml.trn1n.32xlarge")
        SageMakerImageArn?: StringProperty
        SageMakerImageVersionArn?: StringProperty
        LifecycleConfigArn?: StringProperty
      }
      LifecycleConfigArns?: StringProperty[]
    }
    RStudioServerProAppSettings?: {
      AccessStatus?: (string | "ENABLED" | "DISABLED")
      UserGroup?: (string | "R_STUDIO_ADMIN" | "R_STUDIO_USER")
    }
    JupyterLabAppSettings?: {
      DefaultResourceSpec?: {
        InstanceType?: (string | "system" | "ml.t3.micro" | "ml.t3.small" | "ml.t3.medium" | "ml.t3.large" | "ml.t3.xlarge" | "ml.t3.2xlarge" | "ml.m5.large" | "ml.m5.xlarge" | "ml.m5.2xlarge" | "ml.m5.4xlarge" | "ml.m5.8xlarge" | "ml.m5.12xlarge" | "ml.m5.16xlarge" | "ml.m5.24xlarge" | "ml.c5.large" | "ml.c5.xlarge" | "ml.c5.2xlarge" | "ml.c5.4xlarge" | "ml.c5.9xlarge" | "ml.c5.12xlarge" | "ml.c5.18xlarge" | "ml.c5.24xlarge" | "ml.p3.2xlarge" | "ml.p3.8xlarge" | "ml.p3.16xlarge" | "ml.g4dn.xlarge" | "ml.g4dn.2xlarge" | "ml.g4dn.4xlarge" | "ml.g4dn.8xlarge" | "ml.g4dn.12xlarge" | "ml.g4dn.16xlarge" | "ml.r5.large" | "ml.r5.xlarge" | "ml.r5.2xlarge" | "ml.r5.4xlarge" | "ml.r5.8xlarge" | "ml.r5.12xlarge" | "ml.r5.16xlarge" | "ml.r5.24xlarge" | "ml.p3dn.24xlarge" | "ml.m5d.large" | "ml.m5d.xlarge" | "ml.m5d.2xlarge" | "ml.m5d.4xlarge" | "ml.m5d.8xlarge" | "ml.m5d.12xlarge" | "ml.m5d.16xlarge" | "ml.m5d.24xlarge" | "ml.g5.xlarge" | "ml.g5.2xlarge" | "ml.g5.4xlarge" | "ml.g5.8xlarge" | "ml.g5.12xlarge" | "ml.g5.16xlarge" | "ml.g5.24xlarge" | "ml.g5.48xlarge" | "ml.p4d.24xlarge" | "ml.p4de.24xlarge" | "ml.geospatial.interactive" | "ml.trn1.2xlarge" | "ml.trn1.32xlarge" | "ml.trn1n.32xlarge")
        SageMakerImageArn?: StringProperty
        SageMakerImageVersionArn?: StringProperty
        LifecycleConfigArn?: StringProperty
      }
      LifecycleConfigArns?: StringProperty[]
      CodeRepositories?: {
        RepositoryUrl: StringProperty
      }[]
      CustomImages?: {
        AppImageConfigName: StringProperty
        ImageName: StringProperty
        ImageVersionNumber?: number
      }[]
      AppLifecycleManagement?: {
        IdleSettings?: {
          LifecycleManagement?: (string | "ENABLED" | "DISABLED")
          IdleTimeoutInMinutes?: number
          MinIdleTimeoutInMinutes?: number
          MaxIdleTimeoutInMinutes?: number
        }
      }
      BuiltInLifecycleConfigArn?: StringProperty
    }
    SpaceStorageSettings?: {
      DefaultEbsStorageSettings?: {
        DefaultEbsVolumeSizeInGb: number
        MaximumEbsVolumeSizeInGb: number
      }
    }
    CodeEditorAppSettings?: {
      DefaultResourceSpec?: {
        InstanceType?: (string | "system" | "ml.t3.micro" | "ml.t3.small" | "ml.t3.medium" | "ml.t3.large" | "ml.t3.xlarge" | "ml.t3.2xlarge" | "ml.m5.large" | "ml.m5.xlarge" | "ml.m5.2xlarge" | "ml.m5.4xlarge" | "ml.m5.8xlarge" | "ml.m5.12xlarge" | "ml.m5.16xlarge" | "ml.m5.24xlarge" | "ml.c5.large" | "ml.c5.xlarge" | "ml.c5.2xlarge" | "ml.c5.4xlarge" | "ml.c5.9xlarge" | "ml.c5.12xlarge" | "ml.c5.18xlarge" | "ml.c5.24xlarge" | "ml.p3.2xlarge" | "ml.p3.8xlarge" | "ml.p3.16xlarge" | "ml.g4dn.xlarge" | "ml.g4dn.2xlarge" | "ml.g4dn.4xlarge" | "ml.g4dn.8xlarge" | "ml.g4dn.12xlarge" | "ml.g4dn.16xlarge" | "ml.r5.large" | "ml.r5.xlarge" | "ml.r5.2xlarge" | "ml.r5.4xlarge" | "ml.r5.8xlarge" | "ml.r5.12xlarge" | "ml.r5.16xlarge" | "ml.r5.24xlarge" | "ml.p3dn.24xlarge" | "ml.m5d.large" | "ml.m5d.xlarge" | "ml.m5d.2xlarge" | "ml.m5d.4xlarge" | "ml.m5d.8xlarge" | "ml.m5d.12xlarge" | "ml.m5d.16xlarge" | "ml.m5d.24xlarge" | "ml.g5.xlarge" | "ml.g5.2xlarge" | "ml.g5.4xlarge" | "ml.g5.8xlarge" | "ml.g5.12xlarge" | "ml.g5.16xlarge" | "ml.g5.24xlarge" | "ml.g5.48xlarge" | "ml.p4d.24xlarge" | "ml.p4de.24xlarge" | "ml.geospatial.interactive" | "ml.trn1.2xlarge" | "ml.trn1.32xlarge" | "ml.trn1n.32xlarge")
        SageMakerImageArn?: StringProperty
        SageMakerImageVersionArn?: StringProperty
        LifecycleConfigArn?: StringProperty
      }
      LifecycleConfigArns?: StringProperty[]
      CustomImages?: {
        AppImageConfigName: StringProperty
        ImageName: StringProperty
        ImageVersionNumber?: number
      }[]
      AppLifecycleManagement?: {
        IdleSettings?: {
          LifecycleManagement?: (string | "ENABLED" | "DISABLED")
          IdleTimeoutInMinutes?: number
          MinIdleTimeoutInMinutes?: number
          MaxIdleTimeoutInMinutes?: number
        }
      }
      BuiltInLifecycleConfigArn?: StringProperty
    }
    StudioWebPortalSettings?: {
      HiddenMlTools?: (string | "DataWrangler" | "FeatureStore" | "EmrClusters" | "AutoMl" | "Experiments" | "Training" | "ModelEvaluation" | "Pipelines" | "Models" | "JumpStart" | "InferenceRecommender" | "Endpoints" | "Projects" | "InferenceOptimization" | "HyperPodClusters" | "Comet" | "DeepchecksLLMEvaluation" | "Fiddler" | "LakeraGuard" | "PerformanceEvaluation")[]
      HiddenAppTypes?: (string | "JupyterServer" | "TensorBoard" | "RStudioServerPro" | "JupyterLab" | "CodeEditor" | "DetailedProfiler" | "Canvas")[]
      HiddenInstanceTypes?: (string | "system" | "ml.t3.micro" | "ml.t3.small" | "ml.t3.medium" | "ml.t3.large" | "ml.t3.xlarge" | "ml.t3.2xlarge" | "ml.m5.large" | "ml.m5.xlarge" | "ml.m5.2xlarge" | "ml.m5.4xlarge" | "ml.m5.8xlarge" | "ml.m5.12xlarge" | "ml.m5.16xlarge" | "ml.m5.24xlarge" | "ml.m5d.large" | "ml.m5d.xlarge" | "ml.m5d.2xlarge" | "ml.m5d.4xlarge" | "ml.m5d.8xlarge" | "ml.m5d.12xlarge" | "ml.m5d.16xlarge" | "ml.m5d.24xlarge" | "ml.c5.large" | "ml.c5.xlarge" | "ml.c5.2xlarge" | "ml.c5.4xlarge" | "ml.c5.9xlarge" | "ml.c5.12xlarge" | "ml.c5.18xlarge" | "ml.c5.24xlarge" | "ml.p3.2xlarge" | "ml.p3.8xlarge" | "ml.p3.16xlarge" | "ml.p3dn.24xlarge" | "ml.g4dn.xlarge" | "ml.g4dn.2xlarge" | "ml.g4dn.4xlarge" | "ml.g4dn.8xlarge" | "ml.g4dn.12xlarge" | "ml.g4dn.16xlarge" | "ml.r5.large" | "ml.r5.xlarge" | "ml.r5.2xlarge" | "ml.r5.4xlarge" | "ml.r5.8xlarge" | "ml.r5.12xlarge" | "ml.r5.16xlarge" | "ml.r5.24xlarge" | "ml.g5.xlarge" | "ml.g5.2xlarge" | "ml.g5.4xlarge" | "ml.g5.8xlarge" | "ml.g5.12xlarge" | "ml.g5.16xlarge" | "ml.g5.24xlarge" | "ml.g5.48xlarge" | "ml.g6.xlarge" | "ml.g6.2xlarge" | "ml.g6.4xlarge" | "ml.g6.8xlarge" | "ml.g6.12xlarge" | "ml.g6.16xlarge" | "ml.g6.24xlarge" | "ml.g6.48xlarge" | "ml.g6e.xlarge" | "ml.g6e.2xlarge" | "ml.g6e.4xlarge" | "ml.g6e.8xlarge" | "ml.g6e.12xlarge" | "ml.g6e.16xlarge" | "ml.g6e.24xlarge" | "ml.g6e.48xlarge" | "ml.geospatial.interactive" | "ml.p4d.24xlarge" | "ml.p4de.24xlarge" | "ml.trn1.2xlarge" | "ml.trn1.32xlarge" | "ml.trn1n.32xlarge" | "ml.p5.48xlarge" | "ml.m6i.large" | "ml.m6i.xlarge" | "ml.m6i.2xlarge" | "ml.m6i.4xlarge" | "ml.m6i.8xlarge" | "ml.m6i.12xlarge" | "ml.m6i.16xlarge" | "ml.m6i.24xlarge" | "ml.m6i.32xlarge" | "ml.m7i.large" | "ml.m7i.xlarge" | "ml.m7i.2xlarge" | "ml.m7i.4xlarge" | "ml.m7i.8xlarge" | "ml.m7i.12xlarge" | "ml.m7i.16xlarge" | "ml.m7i.24xlarge" | "ml.m7i.48xlarge" | "ml.c6i.large" | "ml.c6i.xlarge" | "ml.c6i.2xlarge" | "ml.c6i.4xlarge" | "ml.c6i.8xlarge" | "ml.c6i.12xlarge" | "ml.c6i.16xlarge" | "ml.c6i.24xlarge" | "ml.c6i.32xlarge" | "ml.c7i.large" | "ml.c7i.xlarge" | "ml.c7i.2xlarge" | "ml.c7i.4xlarge" | "ml.c7i.8xlarge" | "ml.c7i.12xlarge" | "ml.c7i.16xlarge" | "ml.c7i.24xlarge" | "ml.c7i.48xlarge" | "ml.r6i.large" | "ml.r6i.xlarge" | "ml.r6i.2xlarge" | "ml.r6i.4xlarge" | "ml.r6i.8xlarge" | "ml.r6i.12xlarge" | "ml.r6i.16xlarge" | "ml.r6i.24xlarge" | "ml.r6i.32xlarge" | "ml.r7i.large" | "ml.r7i.xlarge" | "ml.r7i.2xlarge" | "ml.r7i.4xlarge" | "ml.r7i.8xlarge" | "ml.r7i.12xlarge" | "ml.r7i.16xlarge" | "ml.r7i.24xlarge" | "ml.r7i.48xlarge" | "ml.m6id.large" | "ml.m6id.xlarge" | "ml.m6id.2xlarge" | "ml.m6id.4xlarge" | "ml.m6id.8xlarge" | "ml.m6id.12xlarge" | "ml.m6id.16xlarge" | "ml.m6id.24xlarge" | "ml.m6id.32xlarge" | "ml.c6id.large" | "ml.c6id.xlarge" | "ml.c6id.2xlarge" | "ml.c6id.4xlarge" | "ml.c6id.8xlarge" | "ml.c6id.12xlarge" | "ml.c6id.16xlarge" | "ml.c6id.24xlarge" | "ml.c6id.32xlarge" | "ml.r6id.large" | "ml.r6id.xlarge" | "ml.r6id.2xlarge" | "ml.r6id.4xlarge" | "ml.r6id.8xlarge" | "ml.r6id.12xlarge" | "ml.r6id.16xlarge" | "ml.r6id.24xlarge" | "ml.r6id.32xlarge")[]
      HiddenSageMakerImageVersionAliases?: {
        SageMakerImageName?: (string | "sagemaker_distribution")
        VersionAliases?: StringProperty[]
      }[]
    }
    DefaultLandingUri?: StringProperty
    StudioWebPortal?: (string | "ENABLED" | "DISABLED")
    CustomPosixUserConfig?: {
      Uid: number
      Gid: number
    }
    CustomFileSystemConfigs?: {
      EFSFileSystemConfig?: {
        FileSystemPath?: StringProperty
        FileSystemId: StringProperty
      }
      FSxLustreFileSystemConfig?: {
        FileSystemPath?: StringProperty
        FileSystemId: StringProperty
      }
      S3FileSystemConfig?: {
        MountPath?: StringProperty
        S3Uri?: StringProperty
      }
    }[]
    SecurityGroups?: StringProperty[]
    SharingSettings?: {
      NotebookOutputOption?: (string | "Allowed" | "Disabled")
      S3KmsKeyId?: StringProperty
      S3OutputPath?: StringProperty
    }
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerUserProfile = ({
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
      Type: 'AWS::SageMaker::UserProfile',
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