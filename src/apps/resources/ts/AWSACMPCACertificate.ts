import {StringProperty} from "../StringProperty"


type Properties = {
  ApiPassthrough?: {
    Extensions?: {
      CertificatePolicies?: {
        CertPolicyId: StringProperty
        PolicyQualifiers?: {
          PolicyQualifierId: StringProperty
          Qualifier: {
            CpsUri: StringProperty
          }
        }[]
      }[]
      ExtendedKeyUsage?: {
        ExtendedKeyUsageType?: StringProperty
        ExtendedKeyUsageObjectIdentifier?: StringProperty
      }[]
      KeyUsage?: {
        DigitalSignature?: boolean
        NonRepudiation?: boolean
        KeyEncipherment?: boolean
        DataEncipherment?: boolean
        KeyAgreement?: boolean
        KeyCertSign?: boolean
        CRLSign?: boolean
        EncipherOnly?: boolean
        DecipherOnly?: boolean
      }
      SubjectAlternativeNames?: {
        OtherName?: {
          TypeId: StringProperty
          Value: StringProperty
        }
        Rfc822Name?: StringProperty
        DnsName?: StringProperty
        DirectoryName?: {
          Country?: StringProperty
          Organization?: StringProperty
          OrganizationalUnit?: StringProperty
          DistinguishedNameQualifier?: StringProperty
          State?: StringProperty
          CommonName?: StringProperty
          SerialNumber?: StringProperty
          Locality?: StringProperty
          Title?: StringProperty
          Surname?: StringProperty
          GivenName?: StringProperty
          Initials?: StringProperty
          Pseudonym?: StringProperty
          GenerationQualifier?: StringProperty
          CustomAttributes?: {
            ObjectIdentifier: StringProperty
            Value: StringProperty
          }[]
        }
        EdiPartyName?: {
          PartyName: StringProperty
          NameAssigner: StringProperty
        }
        UniformResourceIdentifier?: StringProperty
        IpAddress?: StringProperty
        RegisteredId?: StringProperty
      }[]
      CustomExtensions?: {
        Critical?: boolean
        ObjectIdentifier: StringProperty
        Value: StringProperty
      }[]
    }
    Subject?: {
      Country?: StringProperty
      Organization?: StringProperty
      OrganizationalUnit?: StringProperty
      DistinguishedNameQualifier?: StringProperty
      State?: StringProperty
      CommonName?: StringProperty
      SerialNumber?: StringProperty
      Locality?: StringProperty
      Title?: StringProperty
      Surname?: StringProperty
      GivenName?: StringProperty
      Initials?: StringProperty
      Pseudonym?: StringProperty
      GenerationQualifier?: StringProperty
      CustomAttributes?: {
        ObjectIdentifier: StringProperty
        Value: StringProperty
      }[]
    }
  }
  CertificateAuthorityArn: StringProperty
  CertificateSigningRequest: StringProperty
  SigningAlgorithm: StringProperty
  TemplateArn?: StringProperty
  Validity: {
    Value: number
    Type: StringProperty
  }
  ValidityNotBefore?: {
    Value: number
    Type: StringProperty
  }
  Certificate?: StringProperty
  Arn?: StringProperty
}

export const AWSACMPCACertificate = ({
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
      Type: 'AWS::ACMPCA::Certificate',
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