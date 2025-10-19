import {StringProperty} from "../StringProperty"


type Properties = {
  TableCatalogId: StringProperty
  DatabaseName: StringProperty
  TableName: StringProperty
  Name: StringProperty
  RowFilter?: {
    FilterExpression?: StringProperty
    AllRowsWildcard?: Record<string, any>
  }
  ColumnNames?: StringProperty[]
  ColumnWildcard?: {
    ExcludedColumnNames?: StringProperty[]
  }
}

export const AWSLakeFormationDataCellsFilter = ({
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
      Type: 'AWS::LakeFormation::DataCellsFilter',
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