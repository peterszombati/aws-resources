import {StringProperty} from "../StringProperty"


type Properties = {
  NotificationConfiguration: {
    HttpsNotificationConfiguration?: {
      AuthorizationApiKeyName?: StringProperty
      AuthorizationApiKeyValue?: StringProperty
      Endpoint: StringProperty
      HttpMethod?: (string | "POST" | "PUT")
      TargetRoleArn: StringProperty
    }
    SqsNotificationConfiguration?: Record<string, any>
  }
  SubscriberArn: StringProperty
  SubscriberEndpoint?: StringProperty
}

export const AWSSecurityLakeSubscriberNotification = ({
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
      Type: 'AWS::SecurityLake::SubscriberNotification',
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