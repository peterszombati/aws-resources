import {StringProperty} from "../StringProperty"


type Properties = {
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ModelPackageGroupArn?: StringProperty
  ModelPackageGroupName: StringProperty
  ModelPackageGroupDescription?: StringProperty
  ModelPackageGroupPolicy?: Record<string, any> | StringProperty
  CreationTime?: StringProperty
  ModelPackageGroupStatus?: (string | "Pending" | "InProgress" | "Completed" | "Failed" | "Deleting" | "DeleteFailed")
}

export const AWSSageMakerModelPackageGroup = ({
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
      Type: 'AWS::SageMaker::ModelPackageGroup',
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