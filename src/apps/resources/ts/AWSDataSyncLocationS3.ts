import {StringProperty} from "../StringProperty"


type Properties = {
  S3Config: {
    BucketAccessRoleArn: StringProperty
  }
  S3BucketArn?: StringProperty
  Subdirectory?: StringProperty
  S3StorageClass?: (string | "STANDARD" | "STANDARD_IA" | "ONEZONE_IA" | "INTELLIGENT_TIERING" | "GLACIER" | "GLACIER_INSTANT_RETRIEVAL" | "DEEP_ARCHIVE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LocationArn?: StringProperty
  LocationUri?: StringProperty
}

export const AWSDataSyncLocationS3 = ({
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
      Type: 'AWS::DataSync::LocationS3',
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