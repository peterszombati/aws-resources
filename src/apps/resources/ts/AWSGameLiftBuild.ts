import {StringProperty} from "../StringProperty"


type Properties = {
  BuildId?: StringProperty
  Name?: StringProperty
  OperatingSystem?: (string | "AMAZON_LINUX" | "AMAZON_LINUX_2" | "AMAZON_LINUX_2023" | "WINDOWS_2012" | "WINDOWS_2016")
  StorageLocation?: {
    Bucket: StringProperty
    Key: StringProperty
    ObjectVersion?: StringProperty
    RoleArn: StringProperty
  }
  Version?: StringProperty
  ServerSdkVersion?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  BuildArn?: StringProperty
}

export const AWSGameLiftBuild = ({
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
      Type: 'AWS::GameLift::Build',
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