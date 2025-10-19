import {StringProperty} from "../StringProperty"


type Properties = {
  AgentArns: StringProperty[]
  Domain?: StringProperty
  MountOptions?: {
    Version?: (string | "AUTOMATIC" | "SMB1" | "SMB2_0" | "SMB2" | "SMB3")
  }
  Password?: StringProperty
  ServerHostname?: StringProperty
  Subdirectory?: StringProperty
  User?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LocationArn?: StringProperty
  LocationUri?: StringProperty
  AuthenticationType?: (string | "NTLM" | "KERBEROS")
  DnsIpAddresses?: StringProperty[]
  KerberosPrincipal?: StringProperty
  KerberosKeytab?: StringProperty
  KerberosKrb5Conf?: StringProperty
  CmkSecretConfig?: {
    SecretArn?: StringProperty
    KmsKeyArn?: StringProperty
  }
  CustomSecretConfig?: {
    SecretArn: StringProperty
    SecretAccessRoleArn: StringProperty
  }
  ManagedSecretConfig?: {
    SecretArn: StringProperty
  }
}

export const AWSDataSyncLocationSMB = ({
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
      Type: 'AWS::DataSync::LocationSMB',
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