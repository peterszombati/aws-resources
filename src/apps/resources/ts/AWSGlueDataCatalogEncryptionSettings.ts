import {StringProperty} from "../StringProperty"


type Properties = {
  CatalogId: StringProperty
  DataCatalogEncryptionSettings: {
    ConnectionPasswordEncryption?: {
      KmsKeyId?: StringProperty
      ReturnConnectionPasswordEncrypted?: boolean
    }
    EncryptionAtRest?: {
      CatalogEncryptionMode?: StringProperty
      CatalogEncryptionServiceRole?: StringProperty
      SseAwsKmsKeyId?: StringProperty
    }
  }
  Id?: StringProperty
}

export const AWSGlueDataCatalogEncryptionSettings = ({
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
      Type: 'AWS::Glue::DataCatalogEncryptionSettings',
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