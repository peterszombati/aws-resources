import {StringProperty} from "../StringProperty"


type Properties = {
  ReplicationConfigIdentifier: StringProperty
  ReplicationConfigArn?: StringProperty
  SourceEndpointArn: StringProperty
  TargetEndpointArn: StringProperty
  ReplicationType: (string | "full-load" | "full-load-and-cdc" | "cdc")
  ComputeConfig: {
    AvailabilityZone?: StringProperty
    DnsNameServers?: StringProperty
    KmsKeyId?: StringProperty
    MaxCapacityUnits: number
    MinCapacityUnits?: number
    MultiAZ?: boolean
    PreferredMaintenanceWindow?: StringProperty
    ReplicationSubnetGroupId?: StringProperty
    VpcSecurityGroupIds?: StringProperty[]
  }
  ReplicationSettings?: Record<string, any>
  SupplementalSettings?: Record<string, any>
  ResourceIdentifier?: StringProperty
  TableMappings: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDMSReplicationConfig = ({
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
      Type: 'AWS::DMS::ReplicationConfig',
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