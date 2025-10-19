import {StringProperty} from "../StringProperty"


type Properties = {
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
      ColumnNames: StringProperty[]
    }
  }
  LFTags: {
    CatalogId: StringProperty
    TagKey: StringProperty
    TagValues: StringProperty[]
  }[]
  ResourceIdentifier?: StringProperty
  TagsIdentifier?: StringProperty
}

export const AWSLakeFormationTagAssociation = ({
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
      Type: 'AWS::LakeFormation::TagAssociation',
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