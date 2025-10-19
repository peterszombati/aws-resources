import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  CidrIp?: StringProperty
  CidrIpv6?: StringProperty
  Description?: StringProperty
  FromPort?: number
  GroupId?: StringProperty
  GroupName?: StringProperty
  IpProtocol: StringProperty
  SourcePrefixListId?: StringProperty
  SourceSecurityGroupId?: StringProperty
  SourceSecurityGroupName?: StringProperty
  SourceSecurityGroupOwnerId?: StringProperty
  ToPort?: number
}

export const AWSEC2SecurityGroupIngress = ({
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
      Type: 'AWS::EC2::SecurityGroupIngress',
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