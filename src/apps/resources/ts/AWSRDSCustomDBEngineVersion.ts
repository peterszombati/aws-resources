import {StringProperty} from "../StringProperty"


type Properties = {
  DatabaseInstallationFilesS3BucketName?: StringProperty
  DatabaseInstallationFilesS3Prefix?: StringProperty
  Description?: StringProperty
  Engine: StringProperty
  EngineVersion: StringProperty
  KMSKeyId?: StringProperty
  Manifest?: StringProperty
  DBEngineVersionArn?: StringProperty
  SourceCustomDbEngineVersionIdentifier?: StringProperty
  UseAwsProvidedLatestImage?: boolean
  ImageId?: StringProperty
  Status?: (string | "available" | "inactive" | "inactive-except-restore")
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSRDSCustomDBEngineVersion = ({
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
      Type: 'AWS::RDS::CustomDBEngineVersion',
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