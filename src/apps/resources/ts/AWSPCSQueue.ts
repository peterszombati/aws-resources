import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ClusterId: StringProperty
  ComputeNodeGroupConfigurations?: {
    ComputeNodeGroupId?: StringProperty
  }[]
  ErrorInfo?: {
    Code?: StringProperty
    Message?: StringProperty
  }[]
  Id?: StringProperty
  Name?: StringProperty
  SlurmConfiguration?: {
    SlurmCustomSettings?: {
      ParameterName: StringProperty
      ParameterValue: StringProperty
    }[]
  }
  Status?: (string | "CREATING" | "ACTIVE" | "UPDATING" | "DELETING" | "CREATE_FAILED" | "DELETE_FAILED" | "UPDATE_FAILED")
  Tags?: Record<string, any>
}

export const AWSPCSQueue = ({
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
      Type: 'AWS::PCS::Queue',
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