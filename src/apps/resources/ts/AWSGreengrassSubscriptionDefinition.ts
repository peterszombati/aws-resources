import {StringProperty} from "../StringProperty"


type Properties = {
  LatestVersionArn?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Name: StringProperty
  InitialVersion?: {
    Subscriptions: {
      Target: StringProperty
      Id: StringProperty
      Source: StringProperty
      Subject: StringProperty
    }[]
  }
  Tags?: Record<string, any>
}

export const AWSGreengrassSubscriptionDefinition = ({
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
      Type: 'AWS::Greengrass::SubscriptionDefinition',
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