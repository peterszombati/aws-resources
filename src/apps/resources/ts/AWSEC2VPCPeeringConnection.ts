import {StringProperty} from "../StringProperty"


type Properties = {
  PeerRoleArn?: StringProperty
  VpcId: StringProperty
  PeerVpcId: StringProperty
  Id?: StringProperty
  PeerRegion?: StringProperty
  PeerOwnerId?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2VPCPeeringConnection = ({
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
      Type: 'AWS::EC2::VPCPeeringConnection',
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