import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  CaCertificatesBundleS3Bucket?: StringProperty
  CaCertificatesBundleS3Key?: StringProperty
  CaCertificatesBundleS3ObjectVersion?: StringProperty
  Status?: StringProperty
  NumberOfCaCertificates?: number
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  TrustStoreArn?: StringProperty
}

export const AWSElasticLoadBalancingV2TrustStore = ({
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
      Type: 'AWS::ElasticLoadBalancingV2::TrustStore',
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