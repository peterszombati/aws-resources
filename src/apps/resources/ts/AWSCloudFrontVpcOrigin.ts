import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedTime?: StringProperty
  Id?: StringProperty
  LastModifiedTime?: StringProperty
  Status?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VpcOriginEndpointConfig: {
    Arn: StringProperty
    HTTPPort?: number
    HTTPSPort?: number
    Name: StringProperty
    OriginProtocolPolicy?: StringProperty
    OriginSSLProtocols?: StringProperty[]
  }
}

export const AWSCloudFrontVpcOrigin = ({
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
      Type: 'AWS::CloudFront::VpcOrigin',
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