import {StringProperty} from "../StringProperty"


type Properties = {
  AppId: StringProperty
  Arn?: StringProperty
  AutoSubDomainCreationPatterns?: StringProperty[]
  AutoSubDomainIAMRole?: StringProperty
  CertificateRecord?: StringProperty
  Certificate?: {
    CertificateType?: (string | "AMPLIFY_MANAGED" | "CUSTOM")
    CertificateArn?: StringProperty
    CertificateVerificationDNSRecord?: StringProperty
  }
  CertificateSettings?: {
    CertificateType?: (string | "AMPLIFY_MANAGED" | "CUSTOM")
    CustomCertificateArn?: StringProperty
  }
  DomainName: StringProperty
  DomainStatus?: StringProperty
  UpdateStatus?: StringProperty
  EnableAutoSubDomain?: boolean
  StatusReason?: StringProperty
  SubDomainSettings: {
    Prefix: StringProperty
    BranchName: StringProperty
  }[]
}

export const AWSAmplifyDomain = ({
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
      Type: 'AWS::Amplify::Domain',
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