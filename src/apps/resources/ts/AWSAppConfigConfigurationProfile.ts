import {StringProperty} from "../StringProperty"


type Properties = {
  ConfigurationProfileId?: StringProperty
  LocationUri: StringProperty
  Type?: StringProperty
  KmsKeyIdentifier?: StringProperty
  Description?: StringProperty
  KmsKeyArn?: StringProperty
  Validators?: {
    Type?: StringProperty
    Content?: StringProperty
  }[]
  RetrievalRoleArn?: StringProperty
  DeletionProtectionCheck?: (string | "ACCOUNT_DEFAULT" | "APPLY" | "BYPASS")
  ApplicationId: StringProperty
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
  Name: StringProperty
}

export const AWSAppConfigConfigurationProfile = ({
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
      Type: 'AWS::AppConfig::ConfigurationProfile',
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