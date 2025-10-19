import {StringProperty} from "../StringProperty"


type Properties = {
  VerifiedAccessInstanceId?: StringProperty
  VerifiedAccessTrustProviders?: {
    VerifiedAccessTrustProviderId?: StringProperty
    Description?: StringProperty
    TrustProviderType?: StringProperty
    UserTrustProviderType?: StringProperty
    DeviceTrustProviderType?: StringProperty
  }[]
  VerifiedAccessTrustProviderIds?: StringProperty[]
  CreationTime?: StringProperty
  LastUpdatedTime?: StringProperty
  Description?: StringProperty
  LoggingConfigurations?: {
    LogVersion?: StringProperty
    IncludeTrustContext?: boolean
    CloudWatchLogs?: {
      Enabled?: boolean
      LogGroup?: StringProperty
    }
    KinesisDataFirehose?: {
      Enabled?: boolean
      DeliveryStream?: StringProperty
    }
    S3?: {
      Enabled?: boolean
      BucketName?: StringProperty
      BucketOwner?: StringProperty
      Prefix?: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  FipsEnabled?: boolean
  CidrEndpointsCustomSubDomain?: StringProperty
  CidrEndpointsCustomSubDomainNameServers?: StringProperty[]
}

export const AWSEC2VerifiedAccessInstance = ({
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
      Type: 'AWS::EC2::VerifiedAccessInstance',
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