import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ApplicationName: StringProperty
  Output: {
    DestinationSchema: {
      RecordFormatType?: StringProperty
    }
    LambdaOutput?: {
      ResourceARN: StringProperty
    }
    KinesisFirehoseOutput?: {
      ResourceARN: StringProperty
    }
    KinesisStreamsOutput?: {
      ResourceARN: StringProperty
    }
    Name?: StringProperty
  }
}

export const AWSKinesisAnalyticsV2ApplicationOutput = ({
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
      Type: 'AWS::KinesisAnalyticsV2::ApplicationOutput',
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