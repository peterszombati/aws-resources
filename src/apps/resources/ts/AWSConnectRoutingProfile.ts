import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  Name: StringProperty
  Description: StringProperty
  MediaConcurrencies: {
    Channel: (string | "VOICE" | "CHAT" | "TASK" | "EMAIL")
    Concurrency: number
    CrossChannelBehavior?: {
      BehaviorType: (string | "ROUTE_CURRENT_CHANNEL_ONLY" | "ROUTE_ANY_CHANNEL")
    }
  }[]
  DefaultOutboundQueueArn: StringProperty
  RoutingProfileArn?: StringProperty
  QueueConfigs?: {
    Delay: number
    Priority: number
    QueueReference: {
      Channel: (string | "VOICE" | "CHAT" | "TASK" | "EMAIL")
      QueueArn: StringProperty
    }
  }[]
  ManualAssignmentQueueConfigs?: {
    QueueReference: {
      Channel: (string | "VOICE" | "CHAT" | "TASK" | "EMAIL")
      QueueArn: StringProperty
    }
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AgentAvailabilityTimer?: (string | "TIME_SINCE_LAST_ACTIVITY" | "TIME_SINCE_LAST_INBOUND")
}

export const AWSConnectRoutingProfile = ({
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
      Type: 'AWS::Connect::RoutingProfile',
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