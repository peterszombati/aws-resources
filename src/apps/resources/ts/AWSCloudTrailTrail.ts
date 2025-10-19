import {StringProperty} from "../StringProperty"


type Properties = {
  IncludeGlobalServiceEvents?: boolean
  EventSelectors?: {
    IncludeManagementEvents?: boolean
    ReadWriteType?: (string | "All" | "ReadOnly" | "WriteOnly")
    ExcludeManagementEventSources?: StringProperty[]
    DataResources?: {
      Type: StringProperty
      Values?: StringProperty[]
    }[]
  }[]
  KMSKeyId?: StringProperty
  CloudWatchLogsRoleArn?: StringProperty
  S3KeyPrefix?: StringProperty
  AdvancedEventSelectors?: {
    FieldSelectors: {
      Field: StringProperty
      Equals?: StringProperty[]
      NotStartsWith?: StringProperty[]
      NotEndsWith?: StringProperty[]
      StartsWith?: StringProperty[]
      EndsWith?: StringProperty[]
      NotEquals?: StringProperty[]
    }[]
    Name?: StringProperty
  }[]
  TrailName?: StringProperty
  IsOrganizationTrail?: boolean
  InsightSelectors?: {
    InsightType?: StringProperty
  }[]
  CloudWatchLogsLogGroupArn?: StringProperty
  SnsTopicName?: StringProperty
  IsMultiRegionTrail?: boolean
  S3BucketName: StringProperty
  SnsTopicArn?: StringProperty
  EnableLogFileValidation?: boolean
  Arn?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  IsLogging: boolean
}

export const AWSCloudTrailTrail = ({
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
      Type: 'AWS::CloudTrail::Trail',
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