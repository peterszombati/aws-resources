import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  AssociationDefaultRouteTableId?: StringProperty
  AutoAcceptSharedAttachments?: StringProperty
  TransitGatewayArn?: StringProperty
  DefaultRouteTablePropagation?: StringProperty
  TransitGatewayCidrBlocks?: StringProperty[]
  PropagationDefaultRouteTableId?: StringProperty
  DefaultRouteTableAssociation?: StringProperty
  Id?: StringProperty
  VpnEcmpSupport?: StringProperty
  SecurityGroupReferencingSupport?: StringProperty
  DnsSupport?: StringProperty
  MulticastSupport?: StringProperty
  AmazonSideAsn?: number /* schema format: int64*/
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2TransitGateway = ({
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
      Type: 'AWS::EC2::TransitGateway',
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