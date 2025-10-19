import {StringProperty} from "../StringProperty"


type Properties = {
  LoadBalancerName: StringProperty
  CertificateName: StringProperty
  CertificateDomainName: StringProperty
  CertificateAlternativeNames?: StringProperty[]
  LoadBalancerTlsCertificateArn?: StringProperty
  IsAttached?: boolean
  HttpsRedirectionEnabled?: boolean
  Status?: StringProperty
}

export const AWSLightsailLoadBalancerTlsCertificate = ({
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
      Type: 'AWS::Lightsail::LoadBalancerTlsCertificate',
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