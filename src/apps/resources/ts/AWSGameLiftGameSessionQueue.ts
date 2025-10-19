import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  TimeoutInSeconds?: number
  Destinations?: {
    DestinationArn?: StringProperty
  }[]
  PlayerLatencyPolicies?: {
    MaximumIndividualPlayerLatencyMilliseconds?: number
    PolicyDurationSeconds?: number
  }[]
  CustomEventData?: StringProperty
  NotificationTarget?: StringProperty
  FilterConfiguration?: {
    AllowedLocations?: StringProperty[]
  }
  PriorityConfiguration?: {
    LocationOrder?: StringProperty[]
    PriorityOrder?: (string | "LATENCY" | "COST" | "DESTINATION" | "LOCATION")[]
  }
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGameLiftGameSessionQueue = ({
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
      Type: 'AWS::GameLift::GameSessionQueue',
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