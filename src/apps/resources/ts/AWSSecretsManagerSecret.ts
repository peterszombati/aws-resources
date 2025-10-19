import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  KmsKeyId?: StringProperty
  SecretString?: StringProperty
  GenerateSecretString?: {
    ExcludeUppercase?: boolean
    RequireEachIncludedType?: boolean
    IncludeSpace?: boolean
    ExcludeCharacters?: StringProperty
    GenerateStringKey?: StringProperty
    PasswordLength?: number
    ExcludePunctuation?: boolean
    ExcludeLowercase?: boolean
    SecretStringTemplate?: StringProperty
    ExcludeNumbers?: boolean
  }
  ReplicaRegions?: {
    KmsKeyId?: StringProperty
    Region: StringProperty
  }[]
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name?: StringProperty
}

export const AWSSecretsManagerSecret = ({
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
      Type: 'AWS::SecretsManager::Secret',
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