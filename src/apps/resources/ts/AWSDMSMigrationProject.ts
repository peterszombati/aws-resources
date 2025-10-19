import {StringProperty} from "../StringProperty"


type Properties = {
  MigrationProjectName?: StringProperty
  MigrationProjectIdentifier?: StringProperty
  MigrationProjectArn?: StringProperty
  MigrationProjectCreationTime?: StringProperty
  InstanceProfileIdentifier?: StringProperty
  InstanceProfileName?: StringProperty
  InstanceProfileArn?: StringProperty
  TransformationRules?: StringProperty
  Description?: StringProperty
  SchemaConversionApplicationAttributes?: {
    S3BucketPath?: StringProperty
    S3BucketRoleArn?: StringProperty
  }
  SourceDataProviderDescriptors?: {
    DataProviderIdentifier?: StringProperty
    DataProviderName?: StringProperty
    DataProviderArn?: StringProperty
    SecretsManagerSecretId?: StringProperty
    SecretsManagerAccessRoleArn?: StringProperty
  }[]
  TargetDataProviderDescriptors?: {
    DataProviderIdentifier?: StringProperty
    DataProviderName?: StringProperty
    DataProviderArn?: StringProperty
    SecretsManagerSecretId?: StringProperty
    SecretsManagerAccessRoleArn?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDMSMigrationProject = ({
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
      Type: 'AWS::DMS::MigrationProject',
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