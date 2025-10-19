import {StringProperty} from "../StringProperty"


type Properties = {
  Excludes?: {
    FilterType?: (string | "SIMPLE_PATTERN")
    Value?: StringProperty
  }[]
  Includes?: {
    FilterType?: (string | "SIMPLE_PATTERN")
    Value?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CloudWatchLogGroupArn?: StringProperty
  DestinationLocationArn: StringProperty
  Name?: StringProperty
  Options?: {
    Atime?: (string | "NONE" | "BEST_EFFORT")
    BytesPerSecond?: number /* schema format: int64*/
    Gid?: (string | "NONE" | "INT_VALUE" | "NAME" | "BOTH")
    LogLevel?: (string | "OFF" | "BASIC" | "TRANSFER")
    Mtime?: (string | "NONE" | "PRESERVE")
    OverwriteMode?: (string | "ALWAYS" | "NEVER")
    PosixPermissions?: (string | "NONE" | "PRESERVE")
    PreserveDeletedFiles?: (string | "PRESERVE" | "REMOVE")
    PreserveDevices?: (string | "NONE" | "PRESERVE")
    SecurityDescriptorCopyFlags?: (string | "NONE" | "OWNER_DACL" | "OWNER_DACL_SACL")
    TaskQueueing?: (string | "ENABLED" | "DISABLED")
    TransferMode?: (string | "CHANGED" | "ALL")
    Uid?: (string | "NONE" | "INT_VALUE" | "NAME" | "BOTH")
    VerifyMode?: (string | "POINT_IN_TIME_CONSISTENT" | "ONLY_FILES_TRANSFERRED" | "NONE")
    ObjectTags?: (string | "PRESERVE" | "NONE")
  }
  TaskReportConfig?: {
    Destination: {
      S3?: {
        Subdirectory?: StringProperty
        BucketAccessRoleArn?: StringProperty
        S3BucketArn?: StringProperty
      }
    }
    OutputType: (string | "SUMMARY_ONLY" | "STANDARD")
    ReportLevel?: (string | "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS")
    ObjectVersionIds?: (string | "INCLUDE" | "NONE")
    Overrides?: {
      Transferred?: {
        ReportLevel?: (string | "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS")
      }
      Verified?: {
        ReportLevel?: (string | "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS")
      }
      Deleted?: {
        ReportLevel?: (string | "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS")
      }
      Skipped?: {
        ReportLevel?: (string | "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS")
      }
    }
  }
  ManifestConfig?: {
    Action?: (string | "TRANSFER")
    Format?: (string | "CSV")
    Source: {
      S3?: {
        ManifestObjectPath?: StringProperty
        BucketAccessRoleArn?: StringProperty
        S3BucketArn?: StringProperty
        ManifestObjectVersionId?: StringProperty
      }
    }
  }
  Schedule?: {
    ScheduleExpression?: StringProperty
    Status?: (string | "ENABLED" | "DISABLED")
  }
  SourceLocationArn: StringProperty
  TaskArn?: StringProperty
  TaskMode?: (string | "BASIC" | "ENHANCED")
  Status?: (string | "AVAILABLE" | "CREATING" | "QUEUED" | "RUNNING" | "UNAVAILABLE")
  SourceNetworkInterfaceArns?: StringProperty[]
  DestinationNetworkInterfaceArns?: StringProperty[]
}

export const AWSDataSyncTask = ({
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
      Type: 'AWS::DataSync::Task',
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