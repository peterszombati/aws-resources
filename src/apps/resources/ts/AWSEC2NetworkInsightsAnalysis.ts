import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: (string | "running" | "failed" | "succeeded")
  ReturnPathComponents?: {
    AdditionalDetails?: {
      ServiceName?: StringProperty
      AdditionalDetailType?: StringProperty
      LoadBalancers?: {
        Id?: StringProperty
        Arn?: StringProperty
      }[]
      Component?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
    }[]
    InboundHeader?: {
      DestinationPortRanges?: {
        From?: number
        To?: number
      }[]
      SourcePortRanges?: {
        From?: number
        To?: number
      }[]
      DestinationAddresses?: StringProperty[]
      Protocol?: StringProperty
      SourceAddresses?: StringProperty[]
    }
    Vpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    DestinationVpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    SecurityGroupRule?: {
      PortRange?: {
        From?: number
        To?: number
      }
      Cidr?: StringProperty
      PrefixListId?: StringProperty
      SecurityGroupId?: StringProperty
      Protocol?: StringProperty
      Direction?: StringProperty
    }
    TransitGateway?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    ElasticLoadBalancerListener?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Explanations?: {
      VpnGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      PacketField?: StringProperty
      TransitGatewayAttachment?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Protocols?: StringProperty[]
      IngressRouteTable?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      ClassicLoadBalancerListener?: {
        InstancePort?: number
        LoadBalancerPort?: number
      }
      VpcPeeringConnection?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Address?: StringProperty
      Port?: number
      Addresses?: StringProperty[]
      ElasticLoadBalancerListener?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      TransitGatewayRouteTable?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      ExplanationCode?: StringProperty
      InternetGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      SourceVpc?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      AttachedTo?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      PrefixList?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      TransitGatewayRouteTableRoute?: {
        PrefixListId?: StringProperty
        ResourceId?: StringProperty
        State?: StringProperty
        ResourceType?: StringProperty
        RouteOrigin?: StringProperty
        DestinationCidr?: StringProperty
        AttachmentId?: StringProperty
      }
      ComponentRegion?: StringProperty
      LoadBalancerTargetGroup?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      NetworkInterface?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      CustomerGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      DestinationVpc?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      SecurityGroup?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      TransitGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      RouteTable?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      State?: StringProperty
      LoadBalancerListenerPort?: number
      vpcEndpoint?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Subnet?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Cidrs?: StringProperty[]
      Destination?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      SecurityGroups?: {
        Id?: StringProperty
        Arn?: StringProperty
      }[]
      ComponentAccount?: StringProperty
      VpnConnection?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Vpc?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      NatGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Direction?: StringProperty
      LoadBalancerTargetPort?: number
      LoadBalancerTarget?: {
        Address?: StringProperty
        Instance?: {
          Id?: StringProperty
          Arn?: StringProperty
        }
        Port?: number
        AvailabilityZone?: StringProperty
      }
      LoadBalancerTargetGroups?: {
        Id?: StringProperty
        Arn?: StringProperty
      }[]
      Component?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      MissingComponent?: StringProperty
      RouteTableRoute?: {
        Origin?: StringProperty
        destinationPrefixListId?: StringProperty
        destinationCidr?: StringProperty
        NetworkInterfaceId?: StringProperty
        TransitGatewayId?: StringProperty
        VpcPeeringConnectionId?: StringProperty
        instanceId?: StringProperty
        State?: StringProperty
        egressOnlyInternetGatewayId?: StringProperty
        NatGatewayId?: StringProperty
        gatewayId?: StringProperty
      }
      AvailabilityZones?: StringProperty[]
      PortRanges?: {
        From?: number
        To?: number
      }[]
      Acl?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      SecurityGroupRule?: {
        PortRange?: {
          From?: number
          To?: number
        }
        Cidr?: StringProperty
        PrefixListId?: StringProperty
        SecurityGroupId?: StringProperty
        Protocol?: StringProperty
        Direction?: StringProperty
      }
      SubnetRouteTable?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      LoadBalancerArn?: StringProperty
      AclRule?: {
        PortRange?: {
          From?: number
          To?: number
        }
        Cidr?: StringProperty
        RuleAction?: StringProperty
        Egress?: boolean
        RuleNumber?: number
        Protocol?: StringProperty
      }
    }[]
    ServiceName?: StringProperty
    SequenceNumber?: number
    SourceVpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    OutboundHeader?: {
      DestinationPortRanges?: {
        From?: number
        To?: number
      }[]
      SourcePortRanges?: {
        From?: number
        To?: number
      }[]
      DestinationAddresses?: StringProperty[]
      Protocol?: StringProperty
      SourceAddresses?: StringProperty[]
    }
    AclRule?: {
      PortRange?: {
        From?: number
        To?: number
      }
      Cidr?: StringProperty
      RuleAction?: StringProperty
      Egress?: boolean
      RuleNumber?: number
      Protocol?: StringProperty
    }
    TransitGatewayRouteTableRoute?: {
      PrefixListId?: StringProperty
      ResourceId?: StringProperty
      State?: StringProperty
      ResourceType?: StringProperty
      RouteOrigin?: StringProperty
      DestinationCidr?: StringProperty
      AttachmentId?: StringProperty
    }
    Component?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Subnet?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    RouteTableRoute?: {
      Origin?: StringProperty
      destinationPrefixListId?: StringProperty
      destinationCidr?: StringProperty
      NetworkInterfaceId?: StringProperty
      TransitGatewayId?: StringProperty
      VpcPeeringConnectionId?: StringProperty
      instanceId?: StringProperty
      State?: StringProperty
      egressOnlyInternetGatewayId?: StringProperty
      NatGatewayId?: StringProperty
      gatewayId?: StringProperty
    }
  }[]
  NetworkInsightsAnalysisId?: StringProperty
  FilterOutArns?: StringProperty[]
  NetworkInsightsPathId: StringProperty
  NetworkPathFound?: boolean
  SuggestedAccounts?: StringProperty[]
  FilterInArns?: StringProperty[]
  NetworkInsightsAnalysisArn?: StringProperty
  StatusMessage?: StringProperty
  StartDate?: StringProperty
  AlternatePathHints?: {
    ComponentArn?: StringProperty
    ComponentId?: StringProperty
  }[]
  Explanations?: {
    VpnGateway?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    PacketField?: StringProperty
    TransitGatewayAttachment?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Protocols?: StringProperty[]
    IngressRouteTable?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    ClassicLoadBalancerListener?: {
      InstancePort?: number
      LoadBalancerPort?: number
    }
    VpcPeeringConnection?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Address?: StringProperty
    Port?: number
    Addresses?: StringProperty[]
    ElasticLoadBalancerListener?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    TransitGatewayRouteTable?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    ExplanationCode?: StringProperty
    InternetGateway?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    SourceVpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    AttachedTo?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    PrefixList?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    TransitGatewayRouteTableRoute?: {
      PrefixListId?: StringProperty
      ResourceId?: StringProperty
      State?: StringProperty
      ResourceType?: StringProperty
      RouteOrigin?: StringProperty
      DestinationCidr?: StringProperty
      AttachmentId?: StringProperty
    }
    ComponentRegion?: StringProperty
    LoadBalancerTargetGroup?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    NetworkInterface?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    CustomerGateway?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    DestinationVpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    SecurityGroup?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    TransitGateway?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    RouteTable?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    State?: StringProperty
    LoadBalancerListenerPort?: number
    vpcEndpoint?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Subnet?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Cidrs?: StringProperty[]
    Destination?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    SecurityGroups?: {
      Id?: StringProperty
      Arn?: StringProperty
    }[]
    ComponentAccount?: StringProperty
    VpnConnection?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Vpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    NatGateway?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Direction?: StringProperty
    LoadBalancerTargetPort?: number
    LoadBalancerTarget?: {
      Address?: StringProperty
      Instance?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Port?: number
      AvailabilityZone?: StringProperty
    }
    LoadBalancerTargetGroups?: {
      Id?: StringProperty
      Arn?: StringProperty
    }[]
    Component?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    MissingComponent?: StringProperty
    RouteTableRoute?: {
      Origin?: StringProperty
      destinationPrefixListId?: StringProperty
      destinationCidr?: StringProperty
      NetworkInterfaceId?: StringProperty
      TransitGatewayId?: StringProperty
      VpcPeeringConnectionId?: StringProperty
      instanceId?: StringProperty
      State?: StringProperty
      egressOnlyInternetGatewayId?: StringProperty
      NatGatewayId?: StringProperty
      gatewayId?: StringProperty
    }
    AvailabilityZones?: StringProperty[]
    PortRanges?: {
      From?: number
      To?: number
    }[]
    Acl?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    SecurityGroupRule?: {
      PortRange?: {
        From?: number
        To?: number
      }
      Cidr?: StringProperty
      PrefixListId?: StringProperty
      SecurityGroupId?: StringProperty
      Protocol?: StringProperty
      Direction?: StringProperty
    }
    SubnetRouteTable?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    LoadBalancerArn?: StringProperty
    AclRule?: {
      PortRange?: {
        From?: number
        To?: number
      }
      Cidr?: StringProperty
      RuleAction?: StringProperty
      Egress?: boolean
      RuleNumber?: number
      Protocol?: StringProperty
    }
  }[]
  ForwardPathComponents?: {
    AdditionalDetails?: {
      ServiceName?: StringProperty
      AdditionalDetailType?: StringProperty
      LoadBalancers?: {
        Id?: StringProperty
        Arn?: StringProperty
      }[]
      Component?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
    }[]
    InboundHeader?: {
      DestinationPortRanges?: {
        From?: number
        To?: number
      }[]
      SourcePortRanges?: {
        From?: number
        To?: number
      }[]
      DestinationAddresses?: StringProperty[]
      Protocol?: StringProperty
      SourceAddresses?: StringProperty[]
    }
    Vpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    DestinationVpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    SecurityGroupRule?: {
      PortRange?: {
        From?: number
        To?: number
      }
      Cidr?: StringProperty
      PrefixListId?: StringProperty
      SecurityGroupId?: StringProperty
      Protocol?: StringProperty
      Direction?: StringProperty
    }
    TransitGateway?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    ElasticLoadBalancerListener?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Explanations?: {
      VpnGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      PacketField?: StringProperty
      TransitGatewayAttachment?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Protocols?: StringProperty[]
      IngressRouteTable?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      ClassicLoadBalancerListener?: {
        InstancePort?: number
        LoadBalancerPort?: number
      }
      VpcPeeringConnection?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Address?: StringProperty
      Port?: number
      Addresses?: StringProperty[]
      ElasticLoadBalancerListener?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      TransitGatewayRouteTable?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      ExplanationCode?: StringProperty
      InternetGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      SourceVpc?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      AttachedTo?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      PrefixList?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      TransitGatewayRouteTableRoute?: {
        PrefixListId?: StringProperty
        ResourceId?: StringProperty
        State?: StringProperty
        ResourceType?: StringProperty
        RouteOrigin?: StringProperty
        DestinationCidr?: StringProperty
        AttachmentId?: StringProperty
      }
      ComponentRegion?: StringProperty
      LoadBalancerTargetGroup?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      NetworkInterface?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      CustomerGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      DestinationVpc?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      SecurityGroup?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      TransitGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      RouteTable?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      State?: StringProperty
      LoadBalancerListenerPort?: number
      vpcEndpoint?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Subnet?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Cidrs?: StringProperty[]
      Destination?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      SecurityGroups?: {
        Id?: StringProperty
        Arn?: StringProperty
      }[]
      ComponentAccount?: StringProperty
      VpnConnection?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Vpc?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      NatGateway?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      Direction?: StringProperty
      LoadBalancerTargetPort?: number
      LoadBalancerTarget?: {
        Address?: StringProperty
        Instance?: {
          Id?: StringProperty
          Arn?: StringProperty
        }
        Port?: number
        AvailabilityZone?: StringProperty
      }
      LoadBalancerTargetGroups?: {
        Id?: StringProperty
        Arn?: StringProperty
      }[]
      Component?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      MissingComponent?: StringProperty
      RouteTableRoute?: {
        Origin?: StringProperty
        destinationPrefixListId?: StringProperty
        destinationCidr?: StringProperty
        NetworkInterfaceId?: StringProperty
        TransitGatewayId?: StringProperty
        VpcPeeringConnectionId?: StringProperty
        instanceId?: StringProperty
        State?: StringProperty
        egressOnlyInternetGatewayId?: StringProperty
        NatGatewayId?: StringProperty
        gatewayId?: StringProperty
      }
      AvailabilityZones?: StringProperty[]
      PortRanges?: {
        From?: number
        To?: number
      }[]
      Acl?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      SecurityGroupRule?: {
        PortRange?: {
          From?: number
          To?: number
        }
        Cidr?: StringProperty
        PrefixListId?: StringProperty
        SecurityGroupId?: StringProperty
        Protocol?: StringProperty
        Direction?: StringProperty
      }
      SubnetRouteTable?: {
        Id?: StringProperty
        Arn?: StringProperty
      }
      LoadBalancerArn?: StringProperty
      AclRule?: {
        PortRange?: {
          From?: number
          To?: number
        }
        Cidr?: StringProperty
        RuleAction?: StringProperty
        Egress?: boolean
        RuleNumber?: number
        Protocol?: StringProperty
      }
    }[]
    ServiceName?: StringProperty
    SequenceNumber?: number
    SourceVpc?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    OutboundHeader?: {
      DestinationPortRanges?: {
        From?: number
        To?: number
      }[]
      SourcePortRanges?: {
        From?: number
        To?: number
      }[]
      DestinationAddresses?: StringProperty[]
      Protocol?: StringProperty
      SourceAddresses?: StringProperty[]
    }
    AclRule?: {
      PortRange?: {
        From?: number
        To?: number
      }
      Cidr?: StringProperty
      RuleAction?: StringProperty
      Egress?: boolean
      RuleNumber?: number
      Protocol?: StringProperty
    }
    TransitGatewayRouteTableRoute?: {
      PrefixListId?: StringProperty
      ResourceId?: StringProperty
      State?: StringProperty
      ResourceType?: StringProperty
      RouteOrigin?: StringProperty
      DestinationCidr?: StringProperty
      AttachmentId?: StringProperty
    }
    Component?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    Subnet?: {
      Id?: StringProperty
      Arn?: StringProperty
    }
    RouteTableRoute?: {
      Origin?: StringProperty
      destinationPrefixListId?: StringProperty
      destinationCidr?: StringProperty
      NetworkInterfaceId?: StringProperty
      TransitGatewayId?: StringProperty
      VpcPeeringConnectionId?: StringProperty
      instanceId?: StringProperty
      State?: StringProperty
      egressOnlyInternetGatewayId?: StringProperty
      NatGatewayId?: StringProperty
      gatewayId?: StringProperty
    }
  }[]
  AdditionalAccounts?: StringProperty[]
  Tags?: {
    Value?: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEC2NetworkInsightsAnalysis = ({
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
      Type: 'AWS::EC2::NetworkInsightsAnalysis',
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