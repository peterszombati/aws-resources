import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  IdentityManagementType: (string | "SAML" | "CONNECT_MANAGED" | "EXISTING_DIRECTORY")
  InstanceAlias?: StringProperty
  CreatedTime?: StringProperty
  ServiceRole?: StringProperty
  InstanceStatus?: (string | "CREATION_IN_PROGRESS" | "CREATION_FAILED" | "ACTIVE")
  DirectoryId?: StringProperty
  Attributes: {
    InboundCalls: boolean
    OutboundCalls: boolean
    ContactflowLogs?: boolean
    ContactLens?: boolean
    AutoResolveBestVoices?: boolean
    UseCustomTTSVoices?: boolean
    EarlyMedia?: boolean
    MultiPartyConference?: boolean
    HighVolumeOutBound?: boolean
    EnhancedContactMonitoring?: boolean
    EnhancedChatMonitoring?: boolean
    MultiPartyChatConference?: boolean
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConnectInstance = ({
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
      Type: 'AWS::Connect::Instance',
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