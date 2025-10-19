import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Description?: StringProperty
  ConnectionArn: StringProperty
  Arn?: StringProperty
  ArnForPolicy?: StringProperty
  InvocationRateLimitPerSecond?: number
  InvocationEndpoint: StringProperty
  HttpMethod: (string | "GET" | "HEAD" | "POST" | "OPTIONS" | "PUT" | "DELETE" | "PATCH")
}

export const AWSEventsApiDestination = ({
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
      Type: 'AWS::Events::ApiDestination',
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