import {StringProperty} from "../StringProperty"


type Properties = {
  TLSInspectionConfigurationName: StringProperty
  TLSInspectionConfigurationArn?: StringProperty
  TLSInspectionConfiguration: {
    ServerCertificateConfigurations?: {
      ServerCertificates?: {
        ResourceArn?: StringProperty
      }[]
      Scopes?: {
        Sources?: {
          AddressDefinition: StringProperty
        }[]
        Destinations?: {
          AddressDefinition: StringProperty
        }[]
        SourcePorts?: {
          FromPort: number
          ToPort: number
        }[]
        DestinationPorts?: {
          FromPort: number
          ToPort: number
        }[]
        Protocols?: number[]
      }[]
      CertificateAuthorityArn?: StringProperty
      CheckCertificateRevocationStatus?: {
        RevokedStatusAction?: (string | "PASS" | "DROP" | "REJECT")
        UnknownStatusAction?: (string | "PASS" | "DROP" | "REJECT")
      }
    }[]
  }
  TLSInspectionConfigurationId?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNetworkFirewallTLSInspectionConfiguration = ({
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
      Type: 'AWS::NetworkFirewall::TLSInspectionConfiguration',
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