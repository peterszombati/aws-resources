import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  QuietTime?: {
    Start: StringProperty
    End: StringProperty
  }
  Limits?: {
    Daily?: number
    MaximumDuration?: number
    Total?: number
    MessagesPerSecond?: number
  }
  ApplicationId: StringProperty
  CampaignHook?: {
    Mode?: StringProperty
    WebUrl?: StringProperty
    LambdaFunctionName?: StringProperty
  }
  CloudWatchMetricsEnabled?: boolean
}

export const AWSPinpointApplicationSettings = ({
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
      Type: 'AWS::Pinpoint::ApplicationSettings',
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