import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  DisplayName?: StringProperty
  Description?: StringProperty
  LaunchPath: StringProperty
  LaunchParameters?: StringProperty
  WorkingDirectory?: StringProperty
  InstanceFamilies: StringProperty[]
  IconS3Location: {
    S3Bucket: StringProperty
    S3Key: StringProperty
  }
  Arn?: StringProperty
  AppBlockArn: StringProperty
  Platforms: StringProperty[]
  Tags?: any[]
  AttributesToDelete?: StringProperty[]
  CreatedTime?: StringProperty
}

export const AWSAppStreamApplication = ({
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
      Type: 'AWS::AppStream::Application',
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