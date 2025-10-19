import {StringProperty} from "../StringProperty"


type Properties = {
  CatalogId: StringProperty
  DatabaseInput: {
    LocationUri?: StringProperty
    CreateTableDefaultPermissions?: {
      Permissions?: StringProperty[]
      Principal?: {
        DataLakePrincipalIdentifier?: StringProperty
      }
    }[]
    Description?: StringProperty
    Parameters?: Record<string, any>
    TargetDatabase?: {
      DatabaseName?: StringProperty
      Region?: StringProperty
      CatalogId?: StringProperty
    }
    FederatedDatabase?: {
      ConnectionName?: StringProperty
      Identifier?: StringProperty
    }
    Name?: StringProperty
  }
  DatabaseName?: StringProperty
}

export const AWSGlueDatabase = ({
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
      Type: 'AWS::Glue::Database',
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