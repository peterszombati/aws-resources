import {StringProperty} from "../StringProperty"


type Properties = {
  DatasetGroupArn?: StringProperty
  Name: StringProperty
  KmsKeyArn?: StringProperty
  RoleArn?: StringProperty
  Domain?: (string | "ECOMMERCE" | "VIDEO_ON_DEMAND")
}

export const AWSPersonalizeDatasetGroup = ({
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
      Type: 'AWS::Personalize::DatasetGroup',
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