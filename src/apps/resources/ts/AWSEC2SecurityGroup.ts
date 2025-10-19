import {StringProperty} from "../StringProperty"


type Properties = {
  GroupDescription: StringProperty
  GroupName?: StringProperty
  VpcId?: StringProperty
  Id?: StringProperty
  SecurityGroupIngress?: {
    CidrIp?: StringProperty
    CidrIpv6?: StringProperty
    Description?: StringProperty
    FromPort?: number
    SourceSecurityGroupName?: StringProperty
    ToPort?: number
    SourceSecurityGroupOwnerId?: StringProperty
    IpProtocol: StringProperty
    SourceSecurityGroupId?: StringProperty
    SourcePrefixListId?: StringProperty
  }[]
  SecurityGroupEgress?: {
    CidrIp?: StringProperty
    CidrIpv6?: StringProperty
    Description?: StringProperty
    FromPort?: number
    ToPort?: number
    IpProtocol: StringProperty
    DestinationSecurityGroupId?: StringProperty
    DestinationPrefixListId?: StringProperty
  }[]
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  GroupId?: StringProperty
}

export const AWSEC2SecurityGroup = ({
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
      Type: 'AWS::EC2::SecurityGroup',
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