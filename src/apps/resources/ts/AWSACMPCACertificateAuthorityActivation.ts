import {StringProperty} from "../StringProperty"


type Properties = {
  CertificateAuthorityArn: StringProperty
  Certificate: StringProperty
  CertificateChain?: StringProperty
  Status?: StringProperty
  CompleteCertificateChain?: StringProperty
}

export const AWSACMPCACertificateAuthorityActivation = ({
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
      Type: 'AWS::ACMPCA::CertificateAuthorityActivation',
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