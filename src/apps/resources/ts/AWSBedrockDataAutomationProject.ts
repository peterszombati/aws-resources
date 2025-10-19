import {StringProperty} from "../StringProperty"


type Properties = {
  CreationTime?: StringProperty
  CustomOutputConfiguration?: {
    Blueprints?: {
      BlueprintArn: StringProperty
      BlueprintVersion?: StringProperty
      BlueprintStage?: (string | "DEVELOPMENT" | "LIVE")
    }[]
  }
  LastModifiedTime?: StringProperty
  OverrideConfiguration?: {
    Document?: {
      Splitter?: {
        State?: (string | "ENABLED" | "DISABLED")
      }
      ModalityProcessing?: {
        State?: (string | "ENABLED" | "DISABLED")
      }
    }
    Audio?: {
      ModalityProcessing?: {
        State?: (string | "ENABLED" | "DISABLED")
      }
    }
    Video?: {
      ModalityProcessing?: {
        State?: (string | "ENABLED" | "DISABLED")
      }
    }
    Image?: {
      ModalityProcessing?: {
        State?: (string | "ENABLED" | "DISABLED")
      }
    }
    ModalityRouting?: {
      jpeg?: (string | "DOCUMENT" | "IMAGE" | "VIDEO" | "AUDIO")
      png?: (string | "DOCUMENT" | "IMAGE" | "VIDEO" | "AUDIO")
      mp4?: (string | "DOCUMENT" | "IMAGE" | "VIDEO" | "AUDIO")
      mov?: (string | "DOCUMENT" | "IMAGE" | "VIDEO" | "AUDIO")
    }
  }
  ProjectArn?: StringProperty
  ProjectDescription?: StringProperty
  ProjectName: StringProperty
  ProjectStage?: (string | "DEVELOPMENT" | "LIVE")
  StandardOutputConfiguration?: {
    Document?: {
      Extraction?: {
        Granularity: {
          Types?: (string | "DOCUMENT" | "PAGE" | "ELEMENT" | "WORD" | "LINE")[]
        }
        BoundingBox: {
          State: (string | "ENABLED" | "DISABLED")
        }
      }
      GenerativeField?: {
        State: (string | "ENABLED" | "DISABLED")
      }
      OutputFormat?: {
        TextFormat: {
          Types?: (string | "PLAIN_TEXT" | "MARKDOWN" | "HTML" | "CSV")[]
        }
        AdditionalFileFormat: {
          State: (string | "ENABLED" | "DISABLED")
        }
      }
    }
    Image?: {
      Extraction?: {
        Category: {
          State: (string | "ENABLED" | "DISABLED")
          Types?: (string | "CONTENT_MODERATION" | "TEXT_DETECTION" | "LOGOS")[]
        }
        BoundingBox: {
          State: (string | "ENABLED" | "DISABLED")
        }
      }
      GenerativeField?: {
        State: (string | "ENABLED" | "DISABLED")
        Types?: (string | "IMAGE_SUMMARY" | "IAB")[]
      }
    }
    Video?: {
      Extraction?: {
        Category: {
          State: (string | "ENABLED" | "DISABLED")
          Types?: (string | "CONTENT_MODERATION" | "TEXT_DETECTION" | "TRANSCRIPT" | "LOGOS")[]
        }
        BoundingBox: {
          State: (string | "ENABLED" | "DISABLED")
        }
      }
      GenerativeField?: {
        State: (string | "ENABLED" | "DISABLED")
        Types?: (string | "VIDEO_SUMMARY" | "IAB" | "CHAPTER_SUMMARY")[]
      }
    }
    Audio?: {
      Extraction?: {
        Category: {
          State: (string | "ENABLED" | "DISABLED")
          Types?: (string | "AUDIO_CONTENT_MODERATION" | "TRANSCRIPT" | "TOPIC_CONTENT_MODERATION")[]
          TypeConfiguration?: {
            Transcript?: {
              SpeakerLabeling?: {
                State: (string | "ENABLED" | "DISABLED")
              }
              ChannelLabeling?: {
                State: (string | "ENABLED" | "DISABLED")
              }
            }
          }
        }
      }
      GenerativeField?: {
        State: (string | "ENABLED" | "DISABLED")
        Types?: (string | "AUDIO_SUMMARY" | "IAB" | "TOPIC_SUMMARY")[]
      }
    }
  }
  Status?: (string | "COMPLETED" | "IN_PROGRESS" | "FAILED")
  KmsKeyId?: StringProperty
  KmsEncryptionContext?: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSBedrockDataAutomationProject = ({
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
      Type: 'AWS::Bedrock::DataAutomationProject',
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