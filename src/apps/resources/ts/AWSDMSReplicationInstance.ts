import {StringProperty} from "../StringProperty"


type Properties = {
  DnsNameServers?: StringProperty
  ReplicationInstanceIdentifier?: StringProperty
  EngineVersion?: StringProperty
  KmsKeyId?: StringProperty
  AvailabilityZone?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  AutoMinorVersionUpgrade?: boolean
  ReplicationSubnetGroupIdentifier?: StringProperty
  ReplicationInstancePrivateIpAddresses?: StringProperty
  AllocatedStorage?: number
  ResourceIdentifier?: StringProperty
  VpcSecurityGroupIds?: StringProperty[]
  NetworkType?: StringProperty
  AllowMajorVersionUpgrade?: boolean
  ReplicationInstanceClass: StringProperty
  PubliclyAccessible?: boolean
  Id?: StringProperty
  MultiAZ?: boolean
  ReplicationInstancePublicIpAddresses?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSDMSReplicationInstance = ({
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
      Type: 'AWS::DMS::ReplicationInstance',
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