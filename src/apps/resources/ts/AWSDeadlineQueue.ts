import {StringProperty} from "../StringProperty"


type Properties = {
  AllowedStorageProfileIds?: StringProperty[]
  DefaultBudgetAction?: (string | "NONE" | "STOP_SCHEDULING_AND_COMPLETE_TASKS" | "STOP_SCHEDULING_AND_CANCEL_TASKS")
  Description?: StringProperty
  DisplayName: StringProperty
  FarmId: StringProperty
  JobAttachmentSettings?: {
    S3BucketName: StringProperty
    RootPrefix: StringProperty
  }
  JobRunAsUser?: {
    Posix?: {
      User: StringProperty
      Group: StringProperty
    }
    Windows?: {
      User: StringProperty
      PasswordArn: StringProperty
    }
    RunAs: (string | "QUEUE_CONFIGURED_USER" | "WORKER_AGENT_USER")
  }
  QueueId?: StringProperty
  RequiredFileSystemLocationNames?: StringProperty[]
  RoleArn?: StringProperty
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSDeadlineQueue = ({
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
      Type: 'AWS::Deadline::Queue',
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