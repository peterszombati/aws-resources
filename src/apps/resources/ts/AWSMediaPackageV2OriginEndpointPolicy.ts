import {StringProperty} from "../StringProperty"


type Properties = {
  CdnAuthConfiguration?: {
    CdnIdentifierSecretArns: StringProperty[]
    SecretsRoleArn: StringProperty
  }
  ChannelGroupName: StringProperty
  ChannelName: StringProperty
  OriginEndpointName: StringProperty
  Policy: Record<string, any> | StringProperty
}

export const AWSMediaPackageV2OriginEndpointPolicy = ({
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
      Type: 'AWS::MediaPackageV2::OriginEndpointPolicy',
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