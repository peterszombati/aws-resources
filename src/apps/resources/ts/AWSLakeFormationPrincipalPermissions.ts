import {StringProperty} from "../StringProperty"


type Properties = {
  Catalog?: StringProperty
  Principal: {
    DataLakePrincipalIdentifier?: StringProperty
  }
  Resource: {
    Catalog?: Record<string, any>
    Database?: {
      CatalogId: StringProperty
      Name: StringProperty
    }
    Table?: {
      CatalogId: StringProperty
      DatabaseName: StringProperty
      Name?: StringProperty
      TableWildcard?: Record<string, any>
    }
    TableWithColumns?: {
      CatalogId: StringProperty
      DatabaseName: StringProperty
      Name: StringProperty
      ColumnNames?: StringProperty[]
      ColumnWildcard?: {
        ExcludedColumnNames?: StringProperty[]
      }
    }
    DataLocation?: {
      CatalogId: StringProperty
      ResourceArn: StringProperty
    }
    DataCellsFilter?: {
      TableCatalogId: StringProperty
      DatabaseName: StringProperty
      TableName: StringProperty
      Name: StringProperty
    }
    LFTag?: {
      CatalogId: StringProperty
      TagKey: StringProperty
      TagValues: StringProperty[]
    }
    LFTagPolicy?: {
      CatalogId: StringProperty
      ResourceType: (string | "DATABASE" | "TABLE")
      Expression: {
        TagKey?: StringProperty
        TagValues?: StringProperty[]
      }[]
    }
  }
  Permissions: (string | "ALL" | "SELECT" | "ALTER" | "DROP" | "DELETE" | "INSERT" | "DESCRIBE" | "CREATE_DATABASE" | "CREATE_TABLE" | "DATA_LOCATION_ACCESS" | "CREATE_LF_TAG" | "ASSOCIATE" | "GRANT_WITH_LF_TAG_EXPRESSION")[]
  PermissionsWithGrantOption: (string | "ALL" | "SELECT" | "ALTER" | "DROP" | "DELETE" | "INSERT" | "DESCRIBE" | "CREATE_DATABASE" | "CREATE_TABLE" | "DATA_LOCATION_ACCESS" | "CREATE_LF_TAG" | "ASSOCIATE" | "GRANT_WITH_LF_TAG_EXPRESSION")[]
  PrincipalIdentifier?: StringProperty
  ResourceIdentifier?: StringProperty
}

export const AWSLakeFormationPrincipalPermissions = ({
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
      Type: 'AWS::LakeFormation::PrincipalPermissions',
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