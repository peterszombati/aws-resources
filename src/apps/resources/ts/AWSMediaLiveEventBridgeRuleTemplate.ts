import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedAt?: StringProperty
  Description?: StringProperty
  EventTargets?: {
    Arn: StringProperty
  }[]
  EventType: (string | "MEDIALIVE_MULTIPLEX_ALERT" | "MEDIALIVE_MULTIPLEX_STATE_CHANGE" | "MEDIALIVE_CHANNEL_ALERT" | "MEDIALIVE_CHANNEL_INPUT_CHANGE" | "MEDIALIVE_CHANNEL_STATE_CHANGE" | "MEDIAPACKAGE_INPUT_NOTIFICATION" | "MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION" | "MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION" | "SIGNAL_MAP_ACTIVE_ALARM" | "MEDIACONNECT_ALERT" | "MEDIACONNECT_SOURCE_HEALTH" | "MEDIACONNECT_OUTPUT_HEALTH" | "MEDIACONNECT_FLOW_STATUS_CHANGE")
  GroupId?: StringProperty
  GroupIdentifier?: StringProperty
  Id?: StringProperty
  Identifier?: StringProperty
  ModifiedAt?: StringProperty
  Name: StringProperty
  Tags?: Record<string, any>
}

export const AWSMediaLiveEventBridgeRuleTemplate = ({
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
      Type: 'AWS::MediaLive::EventBridgeRuleTemplate',
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