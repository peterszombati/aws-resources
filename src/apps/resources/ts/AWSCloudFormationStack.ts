import {StringProperty} from "../StringProperty"


type Properties = {
  Capabilities?: (string | "CAPABILITY_IAM" | "CAPABILITY_NAMED_IAM" | "CAPABILITY_AUTO_EXPAND")[]
  RoleARN?: StringProperty
  Outputs?: {
    Description?: StringProperty
    ExportName?: StringProperty
    OutputKey?: StringProperty
    OutputValue?: StringProperty
  }[]
  Description?: StringProperty
  DisableRollback?: boolean
  EnableTerminationProtection?: boolean
  NotificationARNs?: StringProperty[]
  Parameters?: Record<string, any>
  ParentId?: StringProperty
  RootId?: StringProperty
  ChangeSetId?: StringProperty
  StackName: StringProperty
  StackId?: StringProperty
  StackPolicyBody?: Record<string, any>
  StackPolicyURL?: StringProperty
  StackStatus?: (string | "CREATE_IN_PROGRESS" | "CREATE_FAILED" | "CREATE_COMPLETE" | "ROLLBACK_IN_PROGRESS" | "ROLLBACK_FAILED" | "ROLLBACK_COMPLETE" | "DELETE_IN_PROGRESS" | "DELETE_FAILED" | "DELETE_COMPLETE" | "UPDATE_IN_PROGRESS" | "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS" | "UPDATE_COMPLETE" | "UPDATE_FAILED" | "UPDATE_ROLLBACK_IN_PROGRESS" | "UPDATE_ROLLBACK_FAILED" | "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS" | "UPDATE_ROLLBACK_COMPLETE" | "REVIEW_IN_PROGRESS" | "IMPORT_IN_PROGRESS" | "IMPORT_COMPLETE" | "IMPORT_ROLLBACK_IN_PROGRESS" | "IMPORT_ROLLBACK_FAILED" | "IMPORT_ROLLBACK_COMPLETE")
  StackStatusReason?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TemplateBody?: Record<string, any> | StringProperty
  TemplateURL?: StringProperty
  TimeoutInMinutes?: number
  LastUpdateTime?: StringProperty
  CreationTime?: StringProperty
}

export const AWSCloudFormationStack = ({
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
      Type: 'AWS::CloudFormation::Stack',
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