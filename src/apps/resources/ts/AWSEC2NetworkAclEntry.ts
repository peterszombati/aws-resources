import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  PortRange?: {
    From?: number
    To?: number
  }
  NetworkAclId: StringProperty
  RuleAction: StringProperty
  CidrBlock?: StringProperty
  Egress?: boolean
  RuleNumber: number
  Ipv6CidrBlock?: StringProperty
  Protocol: number
  Icmp?: {
    Code?: number
    Type?: number
  }
}

export const AWSEC2NetworkAclEntry = ({
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
      Type: 'AWS::EC2::NetworkAclEntry',
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