import {StringProperty} from "../StringProperty"


type Properties = {
  TransitGatewayMulticastDomainId?: StringProperty
  TransitGatewayMulticastDomainArn?: StringProperty
  TransitGatewayId: StringProperty
  State?: StringProperty
  CreationTime?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Options?: {
    AutoAcceptSharedAssociations?: StringProperty
    Igmpv2Support?: StringProperty
    StaticSourcesSupport?: StringProperty
  }
}

export const AWSEC2TransitGatewayMulticastDomain = ({
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
      Type: 'AWS::EC2::TransitGatewayMulticastDomain',
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