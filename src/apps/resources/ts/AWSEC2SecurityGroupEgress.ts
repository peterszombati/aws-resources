import {StringProperty} from "../StringProperty"


type Properties = {
  CidrIp?: StringProperty
  CidrIpv6?: StringProperty
  Description?: StringProperty
  FromPort?: number
  ToPort?: number
  IpProtocol: StringProperty
  DestinationSecurityGroupId?: StringProperty
  Id?: StringProperty
  DestinationPrefixListId?: StringProperty
  GroupId: StringProperty
}

export const AWSEC2SecurityGroupEgress = ({
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
      Type: 'AWS::EC2::SecurityGroupEgress',
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