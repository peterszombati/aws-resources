import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: (string | "active" | "no-permission" | "topic-not-exist")
  CustSubscriptionId?: StringProperty
  EventCategoriesList?: StringProperty[]
  SourceType?: (string | "cluster" | "cluster-parameter-group" | "cluster-security-group" | "cluster-snapshot" | "scheduled-action")
  EventCategories?: (string | "configuration" | "management" | "monitoring" | "security" | "pending")[]
  Enabled?: boolean
  Severity?: (string | "ERROR" | "INFO")
  SubscriptionName: StringProperty
  SourceIds?: StringProperty[]
  CustomerAwsId?: StringProperty
  SourceIdsList?: StringProperty[]
  SnsTopicArn?: StringProperty
  SubscriptionCreationTime?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSRedshiftEventSubscription = ({
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
      Type: 'AWS::Redshift::EventSubscription',
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