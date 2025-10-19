import {StringProperty} from "../StringProperty"


type Properties = {
  RelationalDatabaseName: StringProperty
  DatabaseArn?: StringProperty
  AvailabilityZone?: StringProperty
  RelationalDatabaseBlueprintId: StringProperty
  RelationalDatabaseBundleId: StringProperty
  MasterDatabaseName: StringProperty
  MasterUsername: StringProperty
  MasterUserPassword?: StringProperty
  PreferredBackupWindow?: StringProperty
  PreferredMaintenanceWindow?: StringProperty
  PubliclyAccessible?: boolean
  CaCertificateIdentifier?: StringProperty
  BackupRetention?: boolean
  RotateMasterUserPassword?: boolean
  RelationalDatabaseParameters?: {
    AllowedValues?: StringProperty
    ApplyMethod?: StringProperty
    ApplyType?: StringProperty
    DataType?: StringProperty
    Description?: StringProperty
    IsModifiable?: boolean
    ParameterName?: StringProperty
    ParameterValue?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSLightsailDatabase = ({
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
      Type: 'AWS::Lightsail::Database',
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