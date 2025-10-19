import {StringProperty} from "../StringProperty"


type Properties = {
  CertificateArn: StringProperty
  RoleArn: StringProperty
  CertificateS3BucketName?: StringProperty
  CertificateS3ObjectKey?: StringProperty
  EncryptionKmsKeyId?: StringProperty
}

export const AWSEC2EnclaveCertificateIamRoleAssociation = ({
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
      Type: 'AWS::EC2::EnclaveCertificateIamRoleAssociation',
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