import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  Distributions: {
    Region: StringProperty
    AmiDistributionConfiguration?: {
      Name?: StringProperty
      KmsKeyId?: StringProperty
      Description?: StringProperty
      AmiTags?: Record<string, any>
      TargetAccountIds?: StringProperty[]
      LaunchPermissionConfiguration?: {
        UserIds?: StringProperty[]
        UserGroups?: StringProperty[]
        OrganizationArns?: StringProperty[]
        OrganizationalUnitArns?: StringProperty[]
      }
    }
    ContainerDistributionConfiguration?: {
      Description?: StringProperty
      ContainerTags?: StringProperty[]
      TargetRepository?: {
        Service?: (string | "ECR")
        RepositoryName?: StringProperty
      }
    }
    LicenseConfigurationArns?: StringProperty[]
    LaunchTemplateConfigurations?: {
      LaunchTemplateId?: StringProperty
      AccountId?: StringProperty
      SetDefaultVersion?: boolean
    }[]
    FastLaunchConfigurations?: {
      AccountId?: StringProperty
      Enabled?: boolean
      LaunchTemplate?: {
        LaunchTemplateId?: StringProperty
        LaunchTemplateName?: StringProperty
        LaunchTemplateVersion?: StringProperty
      }
      MaxParallelLaunches?: number
      SnapshotConfiguration?: {
        TargetResourceCount?: number
      }
    }[]
    SsmParameterConfigurations?: {
      AmiAccountId?: StringProperty
      ParameterName: StringProperty
      DataType?: (string | "text" | "aws:ec2:image")
    }[]
  }[]
  Tags?: Record<string, any>
}

export const AWSImageBuilderDistributionConfiguration = ({
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
      Type: 'AWS::ImageBuilder::DistributionConfiguration',
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