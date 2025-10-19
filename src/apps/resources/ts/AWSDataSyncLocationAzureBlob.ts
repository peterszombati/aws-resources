import {StringProperty} from "../StringProperty"


type Properties = {
  AgentArns?: StringProperty[]
  AzureBlobAuthenticationType: (string | "SAS" | "NONE")
  AzureBlobSasConfiguration?: {
    AzureBlobSasToken: StringProperty
  }
  AzureBlobContainerUrl?: StringProperty
  AzureBlobType?: (string | "BLOCK")
  AzureAccessTier?: (string | "HOT" | "COOL" | "ARCHIVE")
  Subdirectory?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LocationArn?: StringProperty
  LocationUri?: StringProperty
  CmkSecretConfig?: {
    SecretArn?: StringProperty
    KmsKeyArn?: StringProperty
  }
  CustomSecretConfig?: {
    SecretArn: StringProperty
    SecretAccessRoleArn: StringProperty
  }
  ManagedSecretConfig?: {
    SecretArn: StringProperty
  }
}

export const AWSDataSyncLocationAzureBlob = ({
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
      Type: 'AWS::DataSync::LocationAzureBlob',
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