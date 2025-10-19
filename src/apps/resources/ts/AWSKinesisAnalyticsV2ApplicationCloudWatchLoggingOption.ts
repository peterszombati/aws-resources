import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ApplicationName: StringProperty
  CloudWatchLoggingOption: {
    LogStreamARN: StringProperty
  }
}

export const AWSKinesisAnalyticsV2ApplicationCloudWatchLoggingOption = ({
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
      Type: 'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption',
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