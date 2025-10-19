import {StringProperty} from "../StringProperty"


type Properties = {
  Resource: {
    DatabaseResource?: {
      CatalogId?: StringProperty
      Name?: StringProperty
    }
    DataLocationResource?: {
      S3Resource?: StringProperty
      CatalogId?: StringProperty
    }
    TableWithColumnsResource?: {
      DatabaseName?: StringProperty
      ColumnNames?: StringProperty[]
      CatalogId?: StringProperty
      Name?: StringProperty
      ColumnWildcard?: {
        ExcludedColumnNames?: StringProperty[]
      }
    }
    TableResource?: {
      DatabaseName?: StringProperty
      CatalogId?: StringProperty
      TableWildcard?: Record<string, any>
      Name?: StringProperty
    }
  }
  Permissions?: StringProperty[]
  Id?: StringProperty
  DataLakePrincipal: {
    DataLakePrincipalIdentifier?: StringProperty
  }
  PermissionsWithGrantOption?: StringProperty[]
}

export const AWSLakeFormationPermissions = ({
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
      Type: 'AWS::LakeFormation::Permissions',
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