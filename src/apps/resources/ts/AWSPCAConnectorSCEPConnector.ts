import {StringProperty} from "../StringProperty"


type Properties = {
  CertificateAuthorityArn: StringProperty
  ConnectorArn?: StringProperty
  Type?: (string | "GENERAL_PURPOSE" | "INTUNE")
  Endpoint?: StringProperty
  MobileDeviceManagement?: Record<string, any>
  OpenIdConfiguration?: {
    Issuer?: StringProperty
    Subject?: StringProperty
    Audience?: StringProperty
  }
  Tags?: Record<string, any>
}

export const AWSPCAConnectorSCEPConnector = ({
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
      Type: 'AWS::PCAConnectorSCEP::Connector',
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