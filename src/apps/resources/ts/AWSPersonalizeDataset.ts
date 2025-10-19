import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  DatasetArn?: StringProperty
  DatasetType: (string | "Interactions" | "Items" | "Users")
  DatasetGroupArn: StringProperty
  SchemaArn: StringProperty
  DatasetImportJob?: {
    JobName?: StringProperty
    DatasetImportJobArn?: StringProperty
    DatasetArn?: StringProperty
    DataSource?: {
      DataLocation?: StringProperty
    }
    RoleArn?: StringProperty
  }
}

export const AWSPersonalizeDataset = ({
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
      Type: 'AWS::Personalize::Dataset',
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