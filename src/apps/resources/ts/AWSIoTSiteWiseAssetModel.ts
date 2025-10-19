import {StringProperty} from "../StringProperty"


type Properties = {
  AssetModelId?: StringProperty
  AssetModelType?: StringProperty
  AssetModelExternalId?: StringProperty
  AssetModelArn?: StringProperty
  AssetModelName: StringProperty
  AssetModelDescription?: StringProperty
  AssetModelProperties?: {
    LogicalId?: StringProperty
    Id?: StringProperty
    ExternalId?: StringProperty
    Name: StringProperty
    DataType: (string | "STRING" | "INTEGER" | "DOUBLE" | "BOOLEAN" | "STRUCT")
    DataTypeSpec?: (string | "AWS/ALARM_STATE")
    Unit?: StringProperty
    Type: {
      TypeName: (string | "Measurement" | "Attribute" | "Transform" | "Metric")
      Attribute?: {
        DefaultValue?: StringProperty
      }
      Transform?: {
        Expression: StringProperty
        Variables: {
          Name: StringProperty
          Value: {
            PropertyLogicalId?: StringProperty
            PropertyId?: StringProperty
            PropertyExternalId?: StringProperty
            PropertyPath?: {
              Name: StringProperty
            }[]
            HierarchyLogicalId?: StringProperty
            HierarchyId?: StringProperty
            HierarchyExternalId?: StringProperty
          }
        }[]
      }
      Metric?: {
        Expression: StringProperty
        Variables: {
          Name: StringProperty
          Value: {
            PropertyLogicalId?: StringProperty
            PropertyId?: StringProperty
            PropertyExternalId?: StringProperty
            PropertyPath?: {
              Name: StringProperty
            }[]
            HierarchyLogicalId?: StringProperty
            HierarchyId?: StringProperty
            HierarchyExternalId?: StringProperty
          }
        }[]
        Window: {
          Tumbling?: {
            Interval: StringProperty
            Offset?: StringProperty
          }
        }
      }
    }
  }[]
  AssetModelCompositeModels?: {
    Id?: StringProperty
    ExternalId?: StringProperty
    ComposedAssetModelId?: StringProperty
    ParentAssetModelCompositeModelExternalId?: StringProperty
    Path?: StringProperty[]
    Description?: StringProperty
    Name: StringProperty
    Type: StringProperty
    CompositeModelProperties?: {
      LogicalId?: StringProperty
      Id?: StringProperty
      ExternalId?: StringProperty
      Name: StringProperty
      DataType: (string | "STRING" | "INTEGER" | "DOUBLE" | "BOOLEAN" | "STRUCT")
      DataTypeSpec?: (string | "AWS/ALARM_STATE")
      Unit?: StringProperty
      Type: {
        TypeName: (string | "Measurement" | "Attribute" | "Transform" | "Metric")
        Attribute?: {
          DefaultValue?: StringProperty
        }
        Transform?: {
          Expression: StringProperty
          Variables: {
            Name: StringProperty
            Value: {
              PropertyLogicalId?: StringProperty
              PropertyId?: StringProperty
              PropertyExternalId?: StringProperty
              PropertyPath?: {
                Name: StringProperty
              }[]
              HierarchyLogicalId?: StringProperty
              HierarchyId?: StringProperty
              HierarchyExternalId?: StringProperty
            }
          }[]
        }
        Metric?: {
          Expression: StringProperty
          Variables: {
            Name: StringProperty
            Value: {
              PropertyLogicalId?: StringProperty
              PropertyId?: StringProperty
              PropertyExternalId?: StringProperty
              PropertyPath?: {
                Name: StringProperty
              }[]
              HierarchyLogicalId?: StringProperty
              HierarchyId?: StringProperty
              HierarchyExternalId?: StringProperty
            }
          }[]
          Window: {
            Tumbling?: {
              Interval: StringProperty
              Offset?: StringProperty
            }
          }
        }
      }
    }[]
  }[]
  AssetModelHierarchies?: {
    Id?: StringProperty
    ExternalId?: StringProperty
    LogicalId?: StringProperty
    Name: StringProperty
    ChildAssetModelId: StringProperty
  }[]
  EnforcedAssetModelInterfaceRelationships?: {
    InterfaceAssetModelId?: StringProperty
    PropertyMappings?: {
      AssetModelPropertyExternalId?: StringProperty
      AssetModelPropertyLogicalId?: StringProperty
      InterfaceAssetModelPropertyExternalId: StringProperty
    }[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTSiteWiseAssetModel = ({
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
      Type: 'AWS::IoTSiteWise::AssetModel',
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