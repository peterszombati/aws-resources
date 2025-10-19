import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ApiStages?: {
    ApiId?: StringProperty
    Stage?: StringProperty
    Throttle?: Record<string, any>
  }[]
  Description?: StringProperty
  Quota?: {
    Limit?: number
    Offset?: number
    Period?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Throttle?: {
    BurstLimit?: number
    RateLimit?: number
  }
  UsagePlanName?: StringProperty
}

export const AWSApiGatewayUsagePlan = ({
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
      Type: 'AWS::ApiGateway::UsagePlan',
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