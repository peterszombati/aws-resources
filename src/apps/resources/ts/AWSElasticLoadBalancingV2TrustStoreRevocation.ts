import {StringProperty} from "../StringProperty"


type Properties = {
  RevocationContents?: {
    S3Bucket?: StringProperty
    S3Key?: StringProperty
    S3ObjectVersion?: StringProperty
    RevocationType?: StringProperty
  }[]
  TrustStoreArn?: StringProperty
  RevocationId?: number /* schema format: int64*/
  TrustStoreRevocations?: {
    TrustStoreArn?: StringProperty
    RevocationId?: StringProperty
    RevocationType?: StringProperty
    NumberOfRevokedEntries?: number /* schema format: int64*/
  }[]
}

export const AWSElasticLoadBalancingV2TrustStoreRevocation = ({
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
      Type: 'AWS::ElasticLoadBalancingV2::TrustStoreRevocation',
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