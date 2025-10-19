import {StringProperty} from "../StringProperty"


type Properties = {
  ImageScanningConfiguration?: {
    EcrConfiguration?: {
      ContainerTags?: StringProperty[]
      RepositoryName?: StringProperty
    }
    ImageScanningEnabled?: boolean
  }
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
  ImageUri?: StringProperty
  Name?: StringProperty
  InfrastructureConfigurationArn?: StringProperty
  ImageRecipeArn?: StringProperty
  DistributionConfigurationArn?: StringProperty
  LatestVersion?: {
    Major?: StringProperty
    Minor?: StringProperty
    Arn?: StringProperty
    Patch?: StringProperty
  }
  LoggingConfiguration?: {
    LogGroupName?: StringProperty
  }
  ImageId?: StringProperty
  ImageTestsConfiguration?: {
    TimeoutMinutes?: number
    ImageTestsEnabled?: boolean
  }
  Arn?: StringProperty
  EnhancedImageMetadataEnabled?: boolean
  ExecutionRole?: StringProperty
  Tags?: Record<string, any>
}

export const AWSImageBuilderImage = ({
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
      Type: 'AWS::ImageBuilder::Image',
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