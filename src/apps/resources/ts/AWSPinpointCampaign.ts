import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  SegmentId: StringProperty
  Priority?: number
  TemplateConfiguration?: {
    SMSTemplate?: {
      Version?: StringProperty
      Name?: StringProperty
    }
    EmailTemplate?: {
      Version?: StringProperty
      Name?: StringProperty
    }
    PushTemplate?: {
      Version?: StringProperty
      Name?: StringProperty
    }
    VoiceTemplate?: {
      Version?: StringProperty
      Name?: StringProperty
    }
  }
  IsPaused?: boolean
  AdditionalTreatments?: {
    TreatmentDescription?: StringProperty
    MessageConfiguration?: {
      APNSMessage?: {
        Action?: StringProperty
        MediaUrl?: StringProperty
        TimeToLive?: number
        ImageSmallIconUrl?: StringProperty
        ImageUrl?: StringProperty
        Title?: StringProperty
        Url?: StringProperty
        JsonBody?: StringProperty
        ImageIconUrl?: StringProperty
        SilentPush?: boolean
        Body?: StringProperty
        RawContent?: StringProperty
      }
      BaiduMessage?: {
        Action?: StringProperty
        MediaUrl?: StringProperty
        TimeToLive?: number
        ImageSmallIconUrl?: StringProperty
        ImageUrl?: StringProperty
        Title?: StringProperty
        Url?: StringProperty
        JsonBody?: StringProperty
        ImageIconUrl?: StringProperty
        SilentPush?: boolean
        Body?: StringProperty
        RawContent?: StringProperty
      }
      DefaultMessage?: {
        Action?: StringProperty
        MediaUrl?: StringProperty
        TimeToLive?: number
        ImageSmallIconUrl?: StringProperty
        ImageUrl?: StringProperty
        Title?: StringProperty
        Url?: StringProperty
        JsonBody?: StringProperty
        ImageIconUrl?: StringProperty
        SilentPush?: boolean
        Body?: StringProperty
        RawContent?: StringProperty
      }
      InAppMessage?: {
        CustomConfig?: Record<string, any>
        Layout?: StringProperty
        Content?: {
          BodyConfig?: {
            Alignment?: StringProperty
            TextColor?: StringProperty
            Body?: StringProperty
          }
          SecondaryBtn?: {
            IOS?: {
              ButtonAction?: StringProperty
              Link?: StringProperty
            }
            Web?: {
              ButtonAction?: StringProperty
              Link?: StringProperty
            }
            DefaultConfig?: {
              ButtonAction?: StringProperty
              BorderRadius?: number
              Text?: StringProperty
              TextColor?: StringProperty
              Link?: StringProperty
              BackgroundColor?: StringProperty
            }
            Android?: {
              ButtonAction?: StringProperty
              Link?: StringProperty
            }
          }
          ImageUrl?: StringProperty
          PrimaryBtn?: {
            IOS?: {
              ButtonAction?: StringProperty
              Link?: StringProperty
            }
            Web?: {
              ButtonAction?: StringProperty
              Link?: StringProperty
            }
            DefaultConfig?: {
              ButtonAction?: StringProperty
              BorderRadius?: number
              Text?: StringProperty
              TextColor?: StringProperty
              Link?: StringProperty
              BackgroundColor?: StringProperty
            }
            Android?: {
              ButtonAction?: StringProperty
              Link?: StringProperty
            }
          }
          HeaderConfig?: {
            Alignment?: StringProperty
            TextColor?: StringProperty
            Header?: StringProperty
          }
          BackgroundColor?: StringProperty
        }[]
      }
      EmailMessage?: {
        Title?: StringProperty
        FromAddress?: StringProperty
        HtmlBody?: StringProperty
        Body?: StringProperty
      }
      GCMMessage?: {
        Action?: StringProperty
        MediaUrl?: StringProperty
        TimeToLive?: number
        ImageSmallIconUrl?: StringProperty
        ImageUrl?: StringProperty
        Title?: StringProperty
        Url?: StringProperty
        JsonBody?: StringProperty
        ImageIconUrl?: StringProperty
        SilentPush?: boolean
        Body?: StringProperty
        RawContent?: StringProperty
      }
      SMSMessage?: {
        EntityId?: StringProperty
        OriginationNumber?: StringProperty
        SenderId?: StringProperty
        Body?: StringProperty
        MessageType?: StringProperty
        TemplateId?: StringProperty
      }
      CustomMessage?: {
        Data?: StringProperty
      }
      ADMMessage?: {
        Action?: StringProperty
        MediaUrl?: StringProperty
        TimeToLive?: number
        ImageSmallIconUrl?: StringProperty
        ImageUrl?: StringProperty
        Title?: StringProperty
        Url?: StringProperty
        JsonBody?: StringProperty
        ImageIconUrl?: StringProperty
        SilentPush?: boolean
        Body?: StringProperty
        RawContent?: StringProperty
      }
    }
    Schedule?: {
      TimeZone?: StringProperty
      QuietTime?: {
        Start: StringProperty
        End: StringProperty
      }
      EndTime?: StringProperty
      StartTime?: StringProperty
      Frequency?: StringProperty
      EventFilter?: {
        Dimensions?: {
          Attributes?: Record<string, any>
          Metrics?: Record<string, any>
          EventType?: {
            Values?: StringProperty[]
            DimensionType?: StringProperty
          }
        }
        FilterType?: StringProperty
      }
      IsLocalTime?: boolean
    }
    TemplateConfiguration?: {
      SMSTemplate?: {
        Version?: StringProperty
        Name?: StringProperty
      }
      EmailTemplate?: {
        Version?: StringProperty
        Name?: StringProperty
      }
      PushTemplate?: {
        Version?: StringProperty
        Name?: StringProperty
      }
      VoiceTemplate?: {
        Version?: StringProperty
        Name?: StringProperty
      }
    }
    CustomDeliveryConfiguration?: {
      EndpointTypes?: StringProperty[]
      DeliveryUri?: StringProperty
    }
    SizePercent?: number
    TreatmentName?: StringProperty
  }[]
  Name: StringProperty
  SegmentVersion?: number
  TreatmentDescription?: StringProperty
  MessageConfiguration?: {
    APNSMessage?: {
      Action?: StringProperty
      MediaUrl?: StringProperty
      TimeToLive?: number
      ImageSmallIconUrl?: StringProperty
      ImageUrl?: StringProperty
      Title?: StringProperty
      Url?: StringProperty
      JsonBody?: StringProperty
      ImageIconUrl?: StringProperty
      SilentPush?: boolean
      Body?: StringProperty
      RawContent?: StringProperty
    }
    BaiduMessage?: {
      Action?: StringProperty
      MediaUrl?: StringProperty
      TimeToLive?: number
      ImageSmallIconUrl?: StringProperty
      ImageUrl?: StringProperty
      Title?: StringProperty
      Url?: StringProperty
      JsonBody?: StringProperty
      ImageIconUrl?: StringProperty
      SilentPush?: boolean
      Body?: StringProperty
      RawContent?: StringProperty
    }
    DefaultMessage?: {
      Action?: StringProperty
      MediaUrl?: StringProperty
      TimeToLive?: number
      ImageSmallIconUrl?: StringProperty
      ImageUrl?: StringProperty
      Title?: StringProperty
      Url?: StringProperty
      JsonBody?: StringProperty
      ImageIconUrl?: StringProperty
      SilentPush?: boolean
      Body?: StringProperty
      RawContent?: StringProperty
    }
    InAppMessage?: {
      CustomConfig?: Record<string, any>
      Layout?: StringProperty
      Content?: {
        BodyConfig?: {
          Alignment?: StringProperty
          TextColor?: StringProperty
          Body?: StringProperty
        }
        SecondaryBtn?: {
          IOS?: {
            ButtonAction?: StringProperty
            Link?: StringProperty
          }
          Web?: {
            ButtonAction?: StringProperty
            Link?: StringProperty
          }
          DefaultConfig?: {
            ButtonAction?: StringProperty
            BorderRadius?: number
            Text?: StringProperty
            TextColor?: StringProperty
            Link?: StringProperty
            BackgroundColor?: StringProperty
          }
          Android?: {
            ButtonAction?: StringProperty
            Link?: StringProperty
          }
        }
        ImageUrl?: StringProperty
        PrimaryBtn?: {
          IOS?: {
            ButtonAction?: StringProperty
            Link?: StringProperty
          }
          Web?: {
            ButtonAction?: StringProperty
            Link?: StringProperty
          }
          DefaultConfig?: {
            ButtonAction?: StringProperty
            BorderRadius?: number
            Text?: StringProperty
            TextColor?: StringProperty
            Link?: StringProperty
            BackgroundColor?: StringProperty
          }
          Android?: {
            ButtonAction?: StringProperty
            Link?: StringProperty
          }
        }
        HeaderConfig?: {
          Alignment?: StringProperty
          TextColor?: StringProperty
          Header?: StringProperty
        }
        BackgroundColor?: StringProperty
      }[]
    }
    EmailMessage?: {
      Title?: StringProperty
      FromAddress?: StringProperty
      HtmlBody?: StringProperty
      Body?: StringProperty
    }
    GCMMessage?: {
      Action?: StringProperty
      MediaUrl?: StringProperty
      TimeToLive?: number
      ImageSmallIconUrl?: StringProperty
      ImageUrl?: StringProperty
      Title?: StringProperty
      Url?: StringProperty
      JsonBody?: StringProperty
      ImageIconUrl?: StringProperty
      SilentPush?: boolean
      Body?: StringProperty
      RawContent?: StringProperty
    }
    SMSMessage?: {
      EntityId?: StringProperty
      OriginationNumber?: StringProperty
      SenderId?: StringProperty
      Body?: StringProperty
      MessageType?: StringProperty
      TemplateId?: StringProperty
    }
    CustomMessage?: {
      Data?: StringProperty
    }
    ADMMessage?: {
      Action?: StringProperty
      MediaUrl?: StringProperty
      TimeToLive?: number
      ImageSmallIconUrl?: StringProperty
      ImageUrl?: StringProperty
      Title?: StringProperty
      Url?: StringProperty
      JsonBody?: StringProperty
      ImageIconUrl?: StringProperty
      SilentPush?: boolean
      Body?: StringProperty
      RawContent?: StringProperty
    }
  }
  Limits?: {
    MessagesPerSecond?: number
    Daily?: number
    MaximumDuration?: number
    Total?: number
    Session?: number
  }
  CampaignId?: StringProperty
  HoldoutPercent?: number
  Schedule: {
    TimeZone?: StringProperty
    QuietTime?: {
      Start: StringProperty
      End: StringProperty
    }
    EndTime?: StringProperty
    StartTime?: StringProperty
    Frequency?: StringProperty
    EventFilter?: {
      Dimensions?: {
        Attributes?: Record<string, any>
        Metrics?: Record<string, any>
        EventType?: {
          Values?: StringProperty[]
          DimensionType?: StringProperty
        }
      }
      FilterType?: StringProperty
    }
    IsLocalTime?: boolean
  }
  CustomDeliveryConfiguration?: {
    EndpointTypes?: StringProperty[]
    DeliveryUri?: StringProperty
  }
  Arn?: StringProperty
  ApplicationId: StringProperty
  CampaignHook?: {
    WebUrl?: StringProperty
    LambdaFunctionName?: StringProperty
    Mode?: StringProperty
  }
  Tags?: Record<string, any>
  TreatmentName?: StringProperty
}

export const AWSPinpointCampaign = ({
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
      Type: 'AWS::Pinpoint::Campaign',
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