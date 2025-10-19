import {StringProperty} from "../StringProperty"


type Properties = {
  AnycastIpList?: {
    AnycastIps: StringProperty[]
    Arn: StringProperty
    Id: StringProperty
    IpCount: number
    IpAddressType?: (string | "ipv4" | "dualstack")
    LastModifiedTime: StringProperty
    Name: StringProperty
    Status: StringProperty
  }
  ETag?: StringProperty
  Id?: StringProperty
  IpCount: number
  IpAddressType?: (string | "ipv4" | "dualstack")
  Name: StringProperty
  Tags?: {
    Items?: {
      Key: StringProperty
      Value?: StringProperty
    }[]
  }
}

export const AWSCloudFrontAnycastIpList = ({
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
      Type: 'AWS::CloudFront::AnycastIpList',
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