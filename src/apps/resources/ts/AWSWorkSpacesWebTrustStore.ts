import {StringProperty} from "../StringProperty"


type Properties = {
  AssociatedPortalArns?: StringProperty[]
  CertificateList: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TrustStoreArn?: StringProperty
}

export const AWSWorkSpacesWebTrustStore = ({
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
      Type: 'AWS::WorkSpacesWeb::TrustStore',
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