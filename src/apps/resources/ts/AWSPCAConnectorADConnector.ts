import {StringProperty} from "../StringProperty"


type Properties = {
  CertificateAuthorityArn: StringProperty
  ConnectorArn?: StringProperty
  DirectoryId: StringProperty
  Tags?: Record<string, any>
  VpcInformation: {
    SecurityGroupIds: StringProperty[]
    IpAddressType?: (string | "IPV4" | "DUALSTACK")
  }
}

export const AWSPCAConnectorADConnector = ({
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
      Type: 'AWS::PCAConnectorAD::Connector',
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