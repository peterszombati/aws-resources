import {StringProperty} from "../StringProperty"


type Properties = {
  ResourceDefinitionId: StringProperty
  Resources: {
    ResourceDataContainer: {
      LocalVolumeResourceData?: {
        SourcePath: StringProperty
        DestinationPath: StringProperty
        GroupOwnerSetting?: {
          AutoAddGroupOwner: boolean
          GroupOwner?: StringProperty
        }
      }
      LocalDeviceResourceData?: {
        SourcePath: StringProperty
        GroupOwnerSetting?: {
          AutoAddGroupOwner: boolean
          GroupOwner?: StringProperty
        }
      }
      S3MachineLearningModelResourceData?: {
        OwnerSetting?: {
          GroupPermission: StringProperty
          GroupOwner: StringProperty
        }
        DestinationPath: StringProperty
        S3Uri: StringProperty
      }
      SecretsManagerSecretResourceData?: {
        ARN: StringProperty
        AdditionalStagingLabelsToDownload?: StringProperty[]
      }
      SageMakerMachineLearningModelResourceData?: {
        OwnerSetting?: {
          GroupPermission: StringProperty
          GroupOwner: StringProperty
        }
        SageMakerJobArn: StringProperty
        DestinationPath: StringProperty
      }
    }
    Id: StringProperty
    Name: StringProperty
  }[]
  Id?: StringProperty
}

export const AWSGreengrassResourceDefinitionVersion = ({
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
      Type: 'AWS::Greengrass::ResourceDefinitionVersion',
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