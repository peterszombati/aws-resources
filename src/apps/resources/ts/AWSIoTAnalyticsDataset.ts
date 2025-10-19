import {StringProperty} from "../StringProperty"


type Properties = {
  Actions: {
    ActionName: StringProperty
    ContainerAction?: {
      Variables?: {
        VariableName: StringProperty
        DatasetContentVersionValue?: {
          DatasetName: StringProperty
        }
        StringValue?: StringProperty
        DoubleValue?: number
        OutputFileUriValue?: {
          FileName: StringProperty
        }
      }[]
      ExecutionRoleArn: StringProperty
      Image: StringProperty
      ResourceConfiguration: {
        VolumeSizeInGB: number
        ComputeType: (string | "ACU_1" | "ACU_2")
      }
    }
    QueryAction?: {
      Filters?: {
        DeltaTime?: {
          OffsetSeconds: number
          TimeExpression: StringProperty
        }
      }[]
      SqlQuery: StringProperty
    }
  }[]
  LateDataRules?: {
    RuleConfiguration: {
      DeltaTimeSessionWindowConfiguration?: {
        TimeoutInMinutes: number
      }
    }
    RuleName?: StringProperty
  }[]
  DatasetName?: StringProperty
  ContentDeliveryRules?: {
    Destination: {
      IotEventsDestinationConfiguration?: {
        InputName: StringProperty
        RoleArn: StringProperty
      }
      S3DestinationConfiguration?: {
        GlueConfiguration?: {
          DatabaseName: StringProperty
          TableName: StringProperty
        }
        Bucket: StringProperty
        Key: StringProperty
        RoleArn: StringProperty
      }
    }
    EntryName?: StringProperty
  }[]
  Triggers?: {
    TriggeringDataset?: {
      DatasetName: StringProperty
    }
    Schedule?: {
      ScheduleExpression: StringProperty
    }
  }[]
  VersioningConfiguration?: {
    Unlimited?: boolean
    MaxVersions?: number
  }
  Id?: StringProperty
  RetentionPeriod?: {
    NumberOfDays?: number
    Unlimited?: boolean
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTAnalyticsDataset = ({
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
      Type: 'AWS::IoTAnalytics::Dataset',
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