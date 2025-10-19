import {StringProperty} from "../StringProperty"


type Properties = {
  AcceptanceRequired: boolean
  AcceptanceTimeoutSeconds?: number
  AdditionalPlayerCount?: number
  BackfillMode?: (string | "AUTOMATIC" | "MANUAL")
  Arn?: StringProperty
  CreationTime?: StringProperty
  CustomEventData?: StringProperty
  Description?: StringProperty
  FlexMatchMode?: (string | "STANDALONE" | "WITH_QUEUE")
  GameProperties?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  GameSessionData?: StringProperty
  GameSessionQueueArns?: StringProperty[]
  Name: StringProperty
  NotificationTarget?: StringProperty
  RequestTimeoutSeconds: number
  RuleSetArn?: StringProperty
  RuleSetName: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGameLiftMatchmakingConfiguration = ({
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
      Type: 'AWS::GameLift::MatchmakingConfiguration',
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