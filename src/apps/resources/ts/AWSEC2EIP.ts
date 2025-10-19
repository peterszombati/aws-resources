import {StringProperty} from "../StringProperty"


type Properties = {
  PublicIp?: StringProperty
  AllocationId?: StringProperty
  Domain?: StringProperty
  NetworkBorderGroup?: StringProperty
  TransferAddress?: StringProperty
  InstanceId?: StringProperty
  PublicIpv4Pool?: StringProperty
  IpamPoolId?: StringProperty
  Address?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2EIP = ({
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
      Type: 'AWS::EC2::EIP',
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