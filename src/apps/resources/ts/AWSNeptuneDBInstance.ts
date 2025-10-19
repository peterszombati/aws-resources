import {StringProperty} from "../StringProperty"


type Properties = {
  AllowMajorVersionUpgrade?: boolean
  AutoMinorVersionUpgrade?: boolean
  PubliclyAccessible?: boolean
  AvailabilityZone?: StringProperty
  DBClusterIdentifier?: StringProperty
  DBInstanceClass: StringProperty
  DBInstanceIdentifier?: StringProperty
  DBParameterGroupName?: StringProperty
  DBSnapshotIdentifier?: StringProperty
  DBSubnetGroupName?: StringProperty
  Endpoint?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  Port?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSNeptuneDBInstance = ({
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
      Type: 'AWS::Neptune::DBInstance',
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