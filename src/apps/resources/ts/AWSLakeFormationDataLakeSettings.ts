import {StringProperty} from "../StringProperty"


type Properties = {
  AllowExternalDataFiltering?: boolean
  ExternalDataFilteringAllowList?: Record<string, any>
  CreateTableDefaultPermissions?: Record<string, any>
  MutationType?: StringProperty
  Parameters?: Record<string, any>
  AllowFullTableExternalDataAccess?: boolean
  Admins?: Record<string, any>
  CreateDatabaseDefaultPermissions?: Record<string, any>
  Id?: StringProperty
  AuthorizedSessionTagValueList?: StringProperty[]
  TrustedResourceOwners?: StringProperty[]
}

export const AWSLakeFormationDataLakeSettings = ({
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
      Type: 'AWS::LakeFormation::DataLakeSettings',
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