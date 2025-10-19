import {StringProperty} from "../StringProperty"


type Properties = {
  CACertificatePem?: StringProperty
  CertificatePem?: StringProperty
  CertificateSigningRequest?: StringProperty
  CertificateMode?: (string | "DEFAULT" | "SNI_ONLY")
  Status: (string | "ACTIVE" | "INACTIVE" | "REVOKED" | "PENDING_TRANSFER" | "PENDING_ACTIVATION")
  Id?: StringProperty
  Arn?: StringProperty
}

export const AWSIoTCertificate = ({
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
      Type: 'AWS::IoT::Certificate',
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