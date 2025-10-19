import {StringProperty} from "../StringProperty"


type Properties = {
  AssociationId?: StringProperty
  ResourceARN?: StringProperty
  FileSystemId: StringProperty
  FileSystemPath: StringProperty
  DataRepositoryPath: StringProperty
  BatchImportMetaDataOnCreate?: boolean
  ImportedFileChunkSize?: number
  S3?: {
    AutoImportPolicy?: {
      Events: (string | "NEW" | "CHANGED" | "DELETED")[]
    }
    AutoExportPolicy?: {
      Events: (string | "NEW" | "CHANGED" | "DELETED")[]
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSFSxDataRepositoryAssociation = ({
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
      Type: 'AWS::FSx::DataRepositoryAssociation',
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