import {StringProperty} from "../StringProperty"


type Properties = {
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Enabled?: boolean
  EventCategories?: StringProperty[]
  SnsTopicArn: StringProperty
  SubscriptionName?: StringProperty
  SourceIds?: StringProperty[]
  SourceType?: StringProperty
}

export const AWSNeptuneEventSubscription = ({
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
      Type: 'AWS::Neptune::EventSubscription',
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