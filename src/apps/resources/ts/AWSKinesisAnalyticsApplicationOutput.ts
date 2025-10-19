import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicationName: StringProperty
  Output: {
    DestinationSchema: {
      RecordFormatType?: StringProperty
    }
    LambdaOutput?: {
      ResourceARN: StringProperty
      RoleARN: StringProperty
    }
    KinesisFirehoseOutput?: {
      ResourceARN: StringProperty
      RoleARN: StringProperty
    }
    KinesisStreamsOutput?: {
      ResourceARN: StringProperty
      RoleARN: StringProperty
    }
    Name?: StringProperty
  }
  Id?: StringProperty
}

export const AWSKinesisAnalyticsApplicationOutput = ({
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
      Type: 'AWS::KinesisAnalytics::ApplicationOutput',
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