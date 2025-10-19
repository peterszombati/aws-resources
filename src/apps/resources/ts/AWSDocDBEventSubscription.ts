import {StringProperty} from "../StringProperty"


type Properties = {
  SourceType?: StringProperty
  Enabled?: boolean
  EventCategories?: StringProperty[]
  SubscriptionName?: StringProperty
  SnsTopicArn: StringProperty
  SourceIds?: StringProperty[]
  Id?: StringProperty
}

export const AWSDocDBEventSubscription = ({
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
      Type: 'AWS::DocDB::EventSubscription',
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