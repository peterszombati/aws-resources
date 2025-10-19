import {StringProperty} from "../StringProperty"


type Properties = {
  KeyName: StringProperty
  KeyType?: (string | "rsa" | "ed25519")
  KeyFormat?: (string | "pem" | "ppk")
  PublicKeyMaterial?: StringProperty
  KeyFingerprint?: StringProperty
  KeyPairId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2KeyPair = ({
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
      Type: 'AWS::EC2::KeyPair',
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