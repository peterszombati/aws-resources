import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Type: StringProperty
  KeyAlgorithm: StringProperty
  SigningAlgorithm: StringProperty
  Subject: {
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
  RevocationConfiguration?: {
    CrlConfiguration?: {
      Enabled: boolean
      ExpirationInDays?: number
      CustomCname?: StringProperty
      S3BucketName?: StringProperty
      S3ObjectAcl?: StringProperty
      CrlDistributionPointExtensionConfiguration?: {
        OmitExtension: boolean
      }
      CrlType?: StringProperty
      CustomPath?: StringProperty
    }
    OcspConfiguration?: {
      Enabled: boolean
      OcspCustomCname?: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  CertificateSigningRequest?: StringProperty
  CsrExtensions?: {
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
    SubjectInformationAccess?: {
      AccessMethod: {
        CustomObjectIdentifier?: StringProperty
        AccessMethodType?: StringProperty
      }
      AccessLocation: {
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
          NameAssigner?: StringProperty
        }
        UniformResourceIdentifier?: StringProperty
        IpAddress?: StringProperty
        RegisteredId?: StringProperty
      }
    }[]
  }
  KeyStorageSecurityStandard?: StringProperty
  UsageMode?: StringProperty
}

export const AWSACMPCACertificateAuthority = ({
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
      Type: 'AWS::ACMPCA::CertificateAuthority',
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