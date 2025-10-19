import {StringProperty} from "../StringProperty"


type Properties = {
  ReplicationTaskSettings?: StringProperty
  CdcStartPosition?: StringProperty
  CdcStopPosition?: StringProperty
  MigrationType: StringProperty
  TargetEndpointArn: StringProperty
  ReplicationInstanceArn: StringProperty
  TaskData?: StringProperty
  CdcStartTime?: number
  ResourceIdentifier?: StringProperty
  TableMappings: StringProperty
  ReplicationTaskIdentifier?: StringProperty
  SourceEndpointArn: StringProperty
  Id?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSDMSReplicationTask = ({
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
      Type: 'AWS::DMS::ReplicationTask',
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