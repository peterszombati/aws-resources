import {StringProperty} from "../StringProperty"


type Properties = {
  NetworkLoadBalancerArn?: StringProperty
  Description?: StringProperty
  Id?: StringProperty
  NetworkInterfaceId?: StringProperty
  GatewayLoadBalancerEndpointId?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2TrafficMirrorTarget = ({
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
      Type: 'AWS::EC2::TrafficMirrorTarget',
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