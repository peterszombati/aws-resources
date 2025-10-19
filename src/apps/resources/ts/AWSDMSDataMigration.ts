import {StringProperty} from "../StringProperty"


type Properties = {
  DataMigrationName?: StringProperty
  DataMigrationArn?: StringProperty
  DataMigrationIdentifier?: StringProperty
  DataMigrationCreateTime?: StringProperty
  ServiceAccessRoleArn: StringProperty
  MigrationProjectIdentifier: StringProperty
  DataMigrationType: (string | "full-load" | "cdc" | "full-load-and-cdc")
  DataMigrationSettings?: {
    CloudwatchLogsEnabled?: boolean
    NumberOfJobs?: number
    SelectionRules?: StringProperty
  }
  SourceDataSettings?: {
    CDCStartPosition?: StringProperty
    CDCStartTime?: StringProperty
    CDCStopTime?: StringProperty
    SlotName?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDMSDataMigration = ({
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
      Type: 'AWS::DMS::DataMigration',
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