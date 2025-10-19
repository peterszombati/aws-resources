import {StringProperty} from "../StringProperty"


type Properties = {
  SecondaryAllocationIds?: StringProperty[]
  PrivateIpAddress?: StringProperty
  SecondaryPrivateIpAddressCount?: number
  EniId?: StringProperty
  AllocationId?: StringProperty
  SubnetId?: StringProperty
  ConnectivityType?: StringProperty
  SecondaryPrivateIpAddresses?: StringProperty[]
  VpcId?: StringProperty
  NatGatewayId?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  MaxDrainDurationSeconds?: number
}

export const AWSEC2NatGateway = ({
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
      Type: 'AWS::EC2::NatGateway',
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