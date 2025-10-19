import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Name: StringProperty
  RoleArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TrainingData: {
    Type: (string | "INTERACTIONS")
    InputConfig: {
      Schema: {
        ColumnName: StringProperty
        ColumnTypes: (string | "USER_ID" | "ITEM_ID" | "TIMESTAMP" | "CATEGORICAL_FEATURE" | "NUMERICAL_FEATURE")[]
      }[]
      DataSource: {
        GlueDataSource: {
          TableName: StringProperty
          DatabaseName: StringProperty
          CatalogId?: StringProperty
        }
      }
    }
  }[]
  TrainingDatasetArn?: StringProperty
  Status?: (string | "ACTIVE")
}

export const AWSCleanRoomsMLTrainingDataset = ({
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
      Type: 'AWS::CleanRoomsML::TrainingDataset',
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