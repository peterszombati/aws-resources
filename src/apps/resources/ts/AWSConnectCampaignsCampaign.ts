import {StringProperty} from "../StringProperty"


type Properties = {
  ConnectInstanceArn: StringProperty
  DialerConfig: {
    ProgressiveDialerConfig?: {
      BandwidthAllocation: number
      DialingCapacity?: number
    }
    PredictiveDialerConfig?: {
      BandwidthAllocation: number
      DialingCapacity?: number
    }
    AgentlessDialerConfig?: {
      DialingCapacity?: number
    }
  }
  Arn?: StringProperty
  Name: StringProperty
  OutboundCallConfig: {
    ConnectContactFlowArn: StringProperty
    ConnectSourcePhoneNumber?: StringProperty
    ConnectQueueArn?: StringProperty
    AnswerMachineDetectionConfig?: {
      EnableAnswerMachineDetection: boolean
      AwaitAnswerMachinePrompt?: boolean
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConnectCampaignsCampaign = ({
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
      Type: 'AWS::ConnectCampaigns::Campaign',
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