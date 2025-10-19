import {StringProperty} from "../StringProperty"


type Properties = {
  RoutingRuleId?: StringProperty
  RoutingRuleArn?: StringProperty
  DomainNameArn: StringProperty
  Priority: number
  Conditions: {
    MatchHeaders?: {
      AnyOf: {
        Header: StringProperty
        ValueGlob: StringProperty
      }[]
    }
    MatchBasePaths?: {
      AnyOf: StringProperty[]
    }
  }[]
  Actions: {
    InvokeApi: {
      ApiId: StringProperty
      Stage: StringProperty
      StripBasePath?: boolean
    }
  }[]
}

export const AWSApiGatewayV2RoutingRule = ({
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
      Type: 'AWS::ApiGatewayV2::RoutingRule',
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