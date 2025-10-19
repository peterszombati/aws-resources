import {StringProperty} from "../StringProperty"


type Properties = {
  RuleLocation: {
    Uri: StringProperty
    VersionId?: StringProperty
  }
  LogBucket?: StringProperty
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
  Options?: any
}

export const AWSCloudFormationGuardHook = ({
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
      Type: 'AWS::CloudFormation::GuardHook',
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