import {StringProperty} from "../StringProperty"


type Properties = {
  ReplicationSubnetGroupDescription: StringProperty
  Id?: StringProperty
  ReplicationSubnetGroupIdentifier?: StringProperty
  SubnetIds: StringProperty[]
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSDMSReplicationSubnetGroup = ({
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
      Type: 'AWS::DMS::ReplicationSubnetGroup',
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