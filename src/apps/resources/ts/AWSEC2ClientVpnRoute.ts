import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ClientVpnEndpointId: StringProperty
  TargetVpcSubnetId: StringProperty
  Description?: StringProperty
  DestinationCidrBlock: StringProperty
}

export const AWSEC2ClientVpnRoute = ({
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
      Type: 'AWS::EC2::ClientVpnRoute',
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