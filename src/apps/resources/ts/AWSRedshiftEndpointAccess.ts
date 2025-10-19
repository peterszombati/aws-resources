import {StringProperty} from "../StringProperty"


type Properties = {
  EndpointStatus?: StringProperty
  VpcEndpoint?: {
    VpcId?: StringProperty
    NetworkInterfaces?: {
      PrivateIpAddress?: StringProperty
      AvailabilityZone?: StringProperty
      SubnetId?: StringProperty
      NetworkInterfaceId?: StringProperty
    }[]
    VpcEndpointId?: StringProperty
  }
  Address?: StringProperty
  EndpointName: StringProperty
  VpcSecurityGroupIds: StringProperty[]
  ResourceOwner?: StringProperty
  SubnetGroupName: StringProperty
  Port?: number
  EndpointCreateTime?: StringProperty
  ClusterIdentifier: StringProperty
  VpcSecurityGroups?: {
    Status?: StringProperty
    VpcSecurityGroupId?: StringProperty
  }[]
}

export const AWSRedshiftEndpointAccess = ({
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
      Type: 'AWS::Redshift::EndpointAccess',
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