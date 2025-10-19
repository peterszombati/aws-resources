import {StringProperty} from "../StringProperty"


type Properties = {
  AttachmentType?: StringProperty
  InternetGatewayId?: StringProperty
  VpcId: StringProperty
  VpnGatewayId?: StringProperty
}

export const AWSEC2VPCGatewayAttachment = ({
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
      Type: 'AWS::EC2::VPCGatewayAttachment',
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