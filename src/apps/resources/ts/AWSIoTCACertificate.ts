import {StringProperty} from "../StringProperty"


type Properties = {
  CACertificatePem: StringProperty
  VerificationCertificatePem?: StringProperty
  Status: (string | "ACTIVE" | "INACTIVE")
  CertificateMode?: (string | "DEFAULT" | "SNI_ONLY")
  AutoRegistrationStatus?: (string | "ENABLE" | "DISABLE")
  RemoveAutoRegistration?: boolean
  RegistrationConfig?: {
    TemplateBody?: StringProperty
    RoleArn?: StringProperty
    TemplateName?: StringProperty
  }
  Id?: StringProperty
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTCACertificate = ({
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
      Type: 'AWS::IoT::CACertificate',
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