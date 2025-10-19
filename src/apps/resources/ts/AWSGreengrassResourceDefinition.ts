import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  LatestVersionArn?: StringProperty
  Tags?: Record<string, any>
  Name: StringProperty
  InitialVersion?: {
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
  }
}

export const AWSGreengrassResourceDefinition = ({
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
      Type: 'AWS::Greengrass::ResourceDefinition',
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