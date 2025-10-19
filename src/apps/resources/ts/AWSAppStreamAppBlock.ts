import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Arn?: StringProperty
  Description?: StringProperty
  DisplayName?: StringProperty
  SourceS3Location: {
    S3Bucket: StringProperty
    S3Key?: StringProperty
  }
  SetupScriptDetails?: {
    ScriptS3Location: {
      S3Bucket: StringProperty
      S3Key?: StringProperty
    }
    ExecutablePath: StringProperty
    ExecutableParameters?: StringProperty
    TimeoutInSeconds: number
  }
  Tags?: any[]
  CreatedTime?: StringProperty
  PackagingType?: StringProperty
  PostSetupScriptDetails?: {
    ScriptS3Location: {
      S3Bucket: StringProperty
      S3Key?: StringProperty
    }
    ExecutablePath: StringProperty
    ExecutableParameters?: StringProperty
    TimeoutInSeconds: number
  }
}

export const AWSAppStreamAppBlock = ({
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
      Type: 'AWS::AppStream::AppBlock',
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