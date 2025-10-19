import {StringProperty} from "../StringProperty"


type Properties = {
  CertificateName: StringProperty
  DomainName: StringProperty
  SubjectAlternativeNames?: StringProperty[]
  CertificateArn?: StringProperty
  Status?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSLightsailCertificate = ({
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
      Type: 'AWS::Lightsail::Certificate',
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