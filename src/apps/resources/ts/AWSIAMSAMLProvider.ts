import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  SamlMetadataDocument?: StringProperty
  Arn?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  AssertionEncryptionMode?: (string | "Allowed" | "Required")
  AddPrivateKey?: StringProperty
  RemovePrivateKey?: StringProperty
  PrivateKeyList?: {
    KeyId: StringProperty
    Timestamp: StringProperty
  }[]
  SamlProviderUUID?: StringProperty
}

export const AWSIAMSAMLProvider = ({
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
      Type: 'AWS::IAM::SAMLProvider',
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