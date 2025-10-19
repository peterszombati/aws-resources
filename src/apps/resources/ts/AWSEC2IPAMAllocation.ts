import {StringProperty} from "../StringProperty"


type Properties = {
  IpamPoolAllocationId?: StringProperty
  IpamPoolId: StringProperty
  Cidr?: StringProperty
  NetmaskLength?: number
  Description?: StringProperty
}

export const AWSEC2IPAMAllocation = ({
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
      Type: 'AWS::EC2::IPAMAllocation',
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