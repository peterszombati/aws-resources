import {StringProperty} from "../StringProperty"


type Properties = {
  ListenerArn: StringProperty
  Certificates: {
    CertificateArn?: StringProperty
  }[]
  Id?: StringProperty
}

export const AWSElasticLoadBalancingV2ListenerCertificate = ({
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
      Type: 'AWS::ElasticLoadBalancingV2::ListenerCertificate',
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