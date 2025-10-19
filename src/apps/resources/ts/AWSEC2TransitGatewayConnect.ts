import {StringProperty} from "../StringProperty"


type Properties = {
  TransitGatewayAttachmentId?: StringProperty
  TransportTransitGatewayAttachmentId: StringProperty
  TransitGatewayId?: StringProperty
  State?: StringProperty
  CreationTime?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Options: {
    Protocol?: StringProperty
  }
}

export const AWSEC2TransitGatewayConnect = ({
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
      Type: 'AWS::EC2::TransitGatewayConnect',
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