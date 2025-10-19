import {StringProperty} from "../StringProperty"


type Properties = {
  OrganizationalUnitDistinguishedNames: StringProperty[]
  ServiceAccountCredentials: {
    AccountName: StringProperty
    AccountPassword: StringProperty
  }
  DirectoryName: StringProperty
  CertificateBasedAuthProperties?: {
    Status?: StringProperty
    CertificateAuthorityArn?: StringProperty
  }
}

export const AWSAppStreamDirectoryConfig = ({
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
      Type: 'AWS::AppStream::DirectoryConfig',
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