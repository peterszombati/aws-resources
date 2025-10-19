import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  EndPoints: {
    KinesisStreamConfig: {
      RoleArn: StringProperty
      StreamArn: StringProperty
    }
    StreamType: StringProperty
  }[]
  Fields: StringProperty[]
  Name: StringProperty
  SamplingRate: number
}

export const AWSCloudFrontRealtimeLogConfig = ({
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
      Type: 'AWS::CloudFront::RealtimeLogConfig',
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