import {StringProperty} from "../StringProperty"


type Properties = {
  TransitGatewayMulticastDomainId: StringProperty
  TransitGatewayAttachmentId: StringProperty
  ResourceId?: StringProperty
  ResourceType?: StringProperty
  State?: StringProperty
  SubnetId: StringProperty
}

export const AWSEC2TransitGatewayMulticastDomainAssociation = ({
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
      Type: 'AWS::EC2::TransitGatewayMulticastDomainAssociation',
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