import {StringProperty} from "../StringProperty"


type Properties = {
  Options?: {
    Ipv6Support?: StringProperty
    ApplianceModeSupport?: StringProperty
    SecurityGroupReferencingSupport?: StringProperty
    DnsSupport?: StringProperty
  }
  TransitGatewayId: StringProperty
  VpcId: StringProperty
  Id?: StringProperty
  SubnetIds: StringProperty[]
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2TransitGatewayAttachment = ({
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
      Type: 'AWS::EC2::TransitGatewayAttachment',
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