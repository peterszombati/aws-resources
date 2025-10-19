import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  HostedZoneId?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Properties?: {
    DnsProperties?: {
      SOA?: {
        TTL?: number
      }
    }
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name: StringProperty
}

export const AWSServiceDiscoveryPublicDnsNamespace = ({
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
      Type: 'AWS::ServiceDiscovery::PublicDnsNamespace',
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