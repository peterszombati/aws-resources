import {StringProperty} from "../StringProperty"


type Properties = {
  TableBucketARN?: StringProperty
  TableBucketName: StringProperty
  UnreferencedFileRemoval?: {
    Status?: (string | "Enabled" | "Disabled")
    UnreferencedDays?: number
    NoncurrentDays?: number
  }
  EncryptionConfiguration?: {
    SSEAlgorithm?: (string | "AES256" | "aws:kms")
    KMSKeyArn?: StringProperty
  }
}

export const AWSS3TablesTableBucket = ({
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
      Type: 'AWS::S3Tables::TableBucket',
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