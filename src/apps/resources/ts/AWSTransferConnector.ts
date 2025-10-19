import {StringProperty} from "../StringProperty"


type Properties = {
  AccessRole: StringProperty
  As2Config?: {
    LocalProfileId?: StringProperty
    PartnerProfileId?: StringProperty
    MessageSubject?: StringProperty
    Compression?: (string | "ZLIB" | "DISABLED")
    EncryptionAlgorithm?: (string | "AES128_CBC" | "AES192_CBC" | "AES256_CBC" | "NONE" | "DES_EDE3_CBC")
    SigningAlgorithm?: (string | "SHA256" | "SHA384" | "SHA512" | "SHA1" | "NONE")
    MdnSigningAlgorithm?: (string | "SHA256" | "SHA384" | "SHA512" | "SHA1" | "NONE" | "DEFAULT")
    MdnResponse?: (string | "SYNC" | "NONE")
    BasicAuthSecretId?: StringProperty
    PreserveContentType?: (string | "ENABLED" | "DISABLED")
  }
  SftpConfig?: {
    UserSecretId?: StringProperty
    TrustedHostKeys?: StringProperty[]
    MaxConcurrentConnections?: number
  }
  Arn?: StringProperty
  ConnectorId?: StringProperty
  LoggingRole?: StringProperty
  ServiceManagedEgressIpAddresses?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Url: StringProperty
  SecurityPolicyName?: StringProperty
}

export const AWSTransferConnector = ({
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
      Type: 'AWS::Transfer::Connector',
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