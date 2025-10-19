import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  EndpointDetails: {
    SecurityDetails?: {
      SubnetIds?: StringProperty[]
      SecurityGroupIds?: StringProperty[]
      RoleArn?: StringProperty
    }
    Endpoint?: {
      Name?: StringProperty
      Address?: {
        Name?: StringProperty
        Port?: number
      }
      Mtu?: number
    }
    AwsGroundStationAgentEndpoint?: {
      Name?: StringProperty
      EgressAddress?: {
        SocketAddress?: {
          Name?: StringProperty
          Port?: number
        }
        Mtu?: number
      }
      IngressAddress?: {
        SocketAddress?: {
          Name?: StringProperty
          PortRange?: {
            Minimum?: number
            Maximum?: number
          }
        }
        Mtu?: number
      }
      AgentStatus?: (string | "SUCCESS" | "FAILED" | "ACTIVE" | "INACTIVE")
      AuditResults?: (string | "HEALTHY" | "UNHEALTHY")
    }
  }[]
  ContactPrePassDurationSeconds?: number
  ContactPostPassDurationSeconds?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGroundStationDataflowEndpointGroup = ({
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
      Type: 'AWS::GroundStation::DataflowEndpointGroup',
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