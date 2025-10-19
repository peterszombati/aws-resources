import {StringProperty} from "../StringProperty"


type Properties = {
  MaxErrors?: StringProperty
  Description?: StringProperty
  ServiceRoleArn?: StringProperty
  Priority: number
  MaxConcurrency?: StringProperty
  Targets?: {
    Values: StringProperty[]
    Key: StringProperty
  }[]
  Name?: StringProperty
  TaskArn: StringProperty
  TaskInvocationParameters?: {
    MaintenanceWindowStepFunctionsParameters?: {
      Input?: StringProperty
      Name?: StringProperty
    }
    MaintenanceWindowRunCommandParameters?: {
      TimeoutSeconds?: number
      Comment?: StringProperty
      OutputS3KeyPrefix?: StringProperty
      Parameters?: Record<string, any>
      CloudWatchOutputConfig?: {
        CloudWatchOutputEnabled?: boolean
        CloudWatchLogGroupName?: StringProperty
      }
      DocumentHashType?: StringProperty
      ServiceRoleArn?: StringProperty
      NotificationConfig?: {
        NotificationEvents?: StringProperty[]
        NotificationArn: StringProperty
        NotificationType?: StringProperty
      }
      DocumentVersion?: StringProperty
      OutputS3BucketName?: StringProperty
      DocumentHash?: StringProperty
    }
    MaintenanceWindowLambdaParameters?: {
      Qualifier?: StringProperty
      Payload?: StringProperty
      ClientContext?: StringProperty
    }
    MaintenanceWindowAutomationParameters?: {
      Parameters?: Record<string, any>
      DocumentVersion?: StringProperty
    }
  }
  WindowId: StringProperty
  TaskParameters?: Record<string, any>
  TaskType: StringProperty
  CutoffBehavior?: StringProperty
  Id?: StringProperty
  LoggingInfo?: {
    Region: StringProperty
    S3Prefix?: StringProperty
    S3Bucket: StringProperty
  }
}

export const AWSSSMMaintenanceWindowTask = ({
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
      Type: 'AWS::SSM::MaintenanceWindowTask',
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