import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  DomainName?: StringProperty
  StreamingDistributionConfig: {
    Logging?: {
      Bucket: StringProperty
      Enabled: boolean
      Prefix: StringProperty
    }
    Comment: StringProperty
    PriceClass?: StringProperty
    S3Origin: {
      DomainName: StringProperty
      OriginAccessIdentity: StringProperty
    }
    Enabled: boolean
    Aliases?: StringProperty[]
    TrustedSigners: {
      Enabled: boolean
      AwsAccountNumbers?: StringProperty[]
    }
  }
  Tags: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCloudFrontStreamingDistribution = ({
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
      Type: 'AWS::CloudFront::StreamingDistribution',
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