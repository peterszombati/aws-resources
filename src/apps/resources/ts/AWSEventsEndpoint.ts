import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Arn?: StringProperty
  RoleArn?: StringProperty
  Description?: StringProperty
  RoutingConfig: {
    FailoverConfig: {
      Primary: {
        HealthCheck: StringProperty
      }
      Secondary: {
        Route: StringProperty
      }
    }
  }
  ReplicationConfig?: {
    State: (string | "ENABLED" | "DISABLED")
  }
  EventBuses: {
    EventBusArn: StringProperty
  }[]
  EndpointId?: StringProperty
  EndpointUrl?: StringProperty
  State?: (string | "ACTIVE" | "CREATING" | "UPDATING" | "DELETING" | "CREATE_FAILED" | "UPDATE_FAILED")
  StateReason?: StringProperty
}

export const AWSEventsEndpoint = ({
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
      Type: 'AWS::Events::Endpoint',
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