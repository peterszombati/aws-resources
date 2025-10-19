import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  SubscriptionDefinitionId: StringProperty
  Subscriptions: {
    Target: StringProperty
    Id: StringProperty
    Source: StringProperty
    Subject: StringProperty
  }[]
}

export const AWSGreengrassSubscriptionDefinitionVersion = ({
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
      Type: 'AWS::Greengrass::SubscriptionDefinitionVersion',
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