import {StringProperty} from "../StringProperty"


type Properties = {
  IpamPoolCidrId?: StringProperty
  IpamPoolId: StringProperty
  Cidr?: StringProperty
  NetmaskLength?: number
  State?: StringProperty
}

export const AWSEC2IPAMPoolCidr = ({
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
      Type: 'AWS::EC2::IPAMPoolCidr',
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