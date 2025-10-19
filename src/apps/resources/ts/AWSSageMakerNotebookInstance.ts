import {StringProperty} from "../StringProperty"


type Properties = {
  KmsKeyId?: StringProperty
  VolumeSizeInGB?: number
  AdditionalCodeRepositories?: StringProperty[]
  DefaultCodeRepository?: StringProperty
  DirectInternetAccess?: StringProperty
  PlatformIdentifier?: StringProperty
  AcceleratorTypes?: StringProperty[]
  SubnetId?: StringProperty
  SecurityGroupIds?: StringProperty[]
  RoleArn: StringProperty
  InstanceMetadataServiceConfiguration?: {
    MinimumInstanceMetadataServiceVersion: StringProperty
  }
  RootAccess?: StringProperty
  Id?: StringProperty
  NotebookInstanceName?: StringProperty
  InstanceType: StringProperty
  LifecycleConfigName?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerNotebookInstance = ({
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
      Type: 'AWS::SageMaker::NotebookInstance',
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