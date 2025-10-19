import {StringProperty} from "../StringProperty"


type Properties = {
  NetworkLoadBalancerArns?: StringProperty[]
  ContributorInsightsEnabled?: boolean
  PayerResponsibility?: StringProperty
  ServiceId?: StringProperty
  AcceptanceRequired?: boolean
  GatewayLoadBalancerArns?: StringProperty[]
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  SupportedIpAddressTypes?: (string | "ipv4" | "ipv6")[]
  SupportedRegions?: StringProperty[]
}

export const AWSEC2VPCEndpointService = ({
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
      Type: 'AWS::EC2::VPCEndpointService',
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