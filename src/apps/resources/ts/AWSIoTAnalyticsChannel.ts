import {StringProperty} from "../StringProperty"


type Properties = {
  ChannelStorage?: {
    ServiceManagedS3?: Record<string, any>
    CustomerManagedS3?: {
      Bucket: StringProperty
      RoleArn: StringProperty
      KeyPrefix?: StringProperty
    }
  }
  ChannelName?: StringProperty
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

export const AWSIoTAnalyticsChannel = ({
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
      Type: 'AWS::IoTAnalytics::Channel',
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