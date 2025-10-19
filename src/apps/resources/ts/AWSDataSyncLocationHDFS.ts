import {StringProperty} from "../StringProperty"


type Properties = {
  NameNodes: {
    Hostname: StringProperty
    Port: number
  }[]
  BlockSize?: number /* schema format: int64*/
  ReplicationFactor?: number /* schema format: int64*/
  KmsKeyProviderUri?: StringProperty
  QopConfiguration?: {
    RpcProtection?: (string | "AUTHENTICATION" | "INTEGRITY" | "PRIVACY" | "DISABLED")
    DataTransferProtection?: (string | "AUTHENTICATION" | "INTEGRITY" | "PRIVACY" | "DISABLED")
  }
  AuthenticationType: (string | "SIMPLE" | "KERBEROS")
  SimpleUser?: StringProperty
  KerberosPrincipal?: StringProperty
  KerberosKeytab?: StringProperty
  KerberosKrb5Conf?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AgentArns: StringProperty[]
  Subdirectory?: StringProperty
  LocationArn?: StringProperty
  LocationUri?: StringProperty
}

export const AWSDataSyncLocationHDFS = ({
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
      Type: 'AWS::DataSync::LocationHDFS',
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