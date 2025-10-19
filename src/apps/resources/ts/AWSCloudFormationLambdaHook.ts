import {StringProperty} from "../StringProperty"


type Properties = {
  LambdaFunction: StringProperty
  HookStatus: (string | "ENABLED" | "DISABLED")
  TargetOperations: (string | "RESOURCE" | "STACK" | "CHANGE_SET" | "CLOUD_CONTROL")[]
  FailureMode: (string | "FAIL" | "WARN")
  TargetFilters?: Record<string, any>
  StackFilters?: {
    FilteringCriteria: (string | "ALL" | "ANY")
    StackNames?: {
      Include?: StringProperty[]
      Exclude?: StringProperty[]
    }
    StackRoles?: {
      Include?: StringProperty[]
      Exclude?: StringProperty[]
    }
  }
  Alias: StringProperty
  HookArn?: StringProperty
  ExecutionRole: StringProperty
}

export const AWSCloudFormationLambdaHook = ({
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
      Type: 'AWS::CloudFormation::LambdaHook',
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