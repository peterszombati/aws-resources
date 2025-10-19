import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Name: StringProperty
  Arn?: StringProperty
  CreatedTime?: StringProperty
  LastModifiedTime?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Ipv6Enabled?: boolean
  RoutingEndpoint?: StringProperty
  AnycastIpListId?: StringProperty
  Status?: StringProperty
  Enabled?: boolean
  IsDefault?: boolean
  ETag?: StringProperty
}

export const AWSCloudFrontConnectionGroup = ({
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
      Type: 'AWS::CloudFront::ConnectionGroup',
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