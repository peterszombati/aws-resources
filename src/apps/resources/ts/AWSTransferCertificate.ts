import {StringProperty} from "../StringProperty"


type Properties = {
  Usage: (string | "SIGNING" | "ENCRYPTION" | "TLS")
  Certificate: StringProperty
  CertificateChain?: StringProperty
  PrivateKey?: StringProperty
  ActiveDate?: StringProperty
  InactiveDate?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  CertificateId?: StringProperty
  Status?: (string | "ACTIVE" | "PENDING" | "INACTIVE")
  Type?: (string | "CERTIFICATE" | "CERTIFICATE_WITH_PRIVATE_KEY")
  Serial?: StringProperty
  NotBeforeDate?: StringProperty
  NotAfterDate?: StringProperty
}

export const AWSTransferCertificate = ({
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
      Type: 'AWS::Transfer::Certificate',
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