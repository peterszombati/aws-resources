import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: (string | "DISABLED" | "ENABLED")
  ImageScanningConfiguration?: {
    EcrConfiguration?: {
      ContainerTags?: StringProperty[]
      RepositoryName?: StringProperty
    }
    ImageScanningEnabled?: boolean
  }
  Description?: StringProperty
  ContainerRecipeArn?: StringProperty
  Workflows?: {
    ParallelGroup?: StringProperty
    Parameters?: {
      Value?: StringProperty[]
      Name?: StringProperty
    }[]
    WorkflowArn?: StringProperty
    OnFailure?: (string | "CONTINUE" | "ABORT")
  }[]
  Name?: StringProperty
  InfrastructureConfigurationArn?: StringProperty
  ImageRecipeArn?: StringProperty
  DistributionConfigurationArn?: StringProperty
  Schedule?: {
    ScheduleExpression?: StringProperty
    PipelineExecutionStartCondition?: (string | "EXPRESSION_MATCH_ONLY" | "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE")
    AutoDisablePolicy?: {
      FailureCount: number
    }
  }
  LoggingConfiguration?: {
    PipelineLogGroupName?: StringProperty
    ImageLogGroupName?: StringProperty
  }
  ImageTestsConfiguration?: {
    TimeoutMinutes?: number
    ImageTestsEnabled?: boolean
  }
  Arn?: StringProperty
  EnhancedImageMetadataEnabled?: boolean
  ExecutionRole?: StringProperty
  Tags?: Record<string, any>
}

export const AWSImageBuilderImagePipeline = ({
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
      Type: 'AWS::ImageBuilder::ImagePipeline',
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