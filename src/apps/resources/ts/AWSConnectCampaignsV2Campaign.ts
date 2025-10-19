import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  ConnectInstanceId: StringProperty
  ChannelSubtypeConfig: {
    Telephony?: {
      Capacity?: number
      ConnectQueueId?: StringProperty
      OutboundMode: {
        ProgressiveConfig?: {
          BandwidthAllocation: number
        }
        PredictiveConfig?: {
          BandwidthAllocation: number
        }
        AgentlessConfig?: Record<string, any>
      }
      DefaultOutboundConfig: {
        ConnectContactFlowId: StringProperty
        ConnectSourcePhoneNumber?: StringProperty
        AnswerMachineDetectionConfig?: {
          EnableAnswerMachineDetection: boolean
          AwaitAnswerMachinePrompt?: boolean
        }
      }
    }
    Sms?: {
      Capacity?: number
      OutboundMode: {
        AgentlessConfig?: Record<string, any>
      }
      DefaultOutboundConfig: {
        ConnectSourcePhoneNumberArn: StringProperty
        WisdomTemplateArn: StringProperty
      }
    }
    Email?: {
      Capacity?: number
      OutboundMode: {
        AgentlessConfig?: Record<string, any>
      }
      DefaultOutboundConfig: {
        ConnectSourceEmailAddress: StringProperty
        SourceEmailAddressDisplayName?: StringProperty
        WisdomTemplateArn: StringProperty
      }
    }
  }
  Source?: {
    CustomerProfilesSegmentArn?: StringProperty
    EventTrigger?: {
      CustomerProfilesDomainArn?: StringProperty
    }
  }
  ConnectCampaignFlowArn?: StringProperty
  Schedule?: {
    StartTime: StringProperty
    EndTime: StringProperty
    RefreshFrequency?: StringProperty
  }
  CommunicationTimeConfig?: {
    LocalTimeZoneConfig: {
      DefaultTimeZone?: StringProperty
      LocalTimeZoneDetection?: (string | "ZIP_CODE" | "AREA_CODE")[]
    }
    Telephony?: {
      OpenHours: {
        DailyHours: {
          Key?: (string | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY")
          Value?: {
            StartTime: StringProperty
            EndTime: StringProperty
          }[]
        }[]
      }
      RestrictedPeriods?: {
        RestrictedPeriodList?: {
          Name?: StringProperty
          StartDate: StringProperty
          EndDate: StringProperty
        }[]
      }
    }
    Sms?: {
      OpenHours: {
        DailyHours: {
          Key?: (string | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY")
          Value?: {
            StartTime: StringProperty
            EndTime: StringProperty
          }[]
        }[]
      }
      RestrictedPeriods?: {
        RestrictedPeriodList?: {
          Name?: StringProperty
          StartDate: StringProperty
          EndDate: StringProperty
        }[]
      }
    }
    Email?: {
      OpenHours: {
        DailyHours: {
          Key?: (string | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY")
          Value?: {
            StartTime: StringProperty
            EndTime: StringProperty
          }[]
        }[]
      }
      RestrictedPeriods?: {
        RestrictedPeriodList?: {
          Name?: StringProperty
          StartDate: StringProperty
          EndDate: StringProperty
        }[]
      }
    }
  }
  CommunicationLimitsOverride?: {
    AllChannelsSubtypes?: {
      CommunicationLimitList?: {
        MaxCountPerRecipient: number
        Frequency: number
        Unit: (string | "DAY")
      }[]
    }
    InstanceLimitsHandling?: (string | "OPT_IN" | "OPT_OUT")
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConnectCampaignsV2Campaign = ({
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
      Type: 'AWS::ConnectCampaignsV2::Campaign',
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