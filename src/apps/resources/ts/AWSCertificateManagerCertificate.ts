import {StringProperty} from "../StringProperty"


type Properties = {
  CertificateAuthorityArn?: StringProperty
  CertificateExport?: StringProperty
  DomainValidationOptions?: {
    DomainName: StringProperty
    ValidationDomain?: StringProperty
    HostedZoneId?: StringProperty
  }[]
  CertificateTransparencyLoggingPreference?: StringProperty
  DomainName: StringProperty
  ValidationMethod?: StringProperty
  SubjectAlternativeNames?: StringProperty[]
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  KeyAlgorithm?: StringProperty
}

export const AWSCertificateManagerCertificate = ({
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
      Type: 'AWS::CertificateManager::Certificate',
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