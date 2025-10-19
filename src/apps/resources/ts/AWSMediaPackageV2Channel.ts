import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ChannelGroupName: StringProperty
  ChannelName: StringProperty
  CreatedAt?: StringProperty
  Description?: StringProperty
  IngestEndpoints?: {
    Id?: StringProperty
    Url?: StringProperty
  }[]
  InputSwitchConfiguration?: {
    MQCSInputSwitching?: boolean
    PreferredInput?: number
  }
  InputType?: (string | "HLS" | "CMAF")
  ModifiedAt?: StringProperty
  OutputHeaderConfiguration?: {
    PublishMQCS?: boolean
  }
  IngestEndpointUrls?: StringProperty[]
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMediaPackageV2Channel = ({
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
      Type: 'AWS::MediaPackageV2::Channel',
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