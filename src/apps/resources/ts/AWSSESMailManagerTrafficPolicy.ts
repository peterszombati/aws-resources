import {StringProperty} from "../StringProperty"


type Properties = {
  DefaultAction: (string | "ALLOW" | "DENY")
  MaxMessageSizeBytes?: number
  PolicyStatements: {
    Conditions: any[]
    Action: (string | "ALLOW" | "DENY")
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TrafficPolicyArn?: StringProperty
  TrafficPolicyId?: StringProperty
  TrafficPolicyName?: StringProperty
}

export const AWSSESMailManagerTrafficPolicy = ({
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
      Type: 'AWS::SES::MailManagerTrafficPolicy',
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