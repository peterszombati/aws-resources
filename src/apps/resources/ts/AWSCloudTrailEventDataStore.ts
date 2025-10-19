import {StringProperty} from "../StringProperty"


type Properties = {
  AdvancedEventSelectors?: {
    Name?: StringProperty
    FieldSelectors: {
      Field: StringProperty
      Equals?: StringProperty[]
      StartsWith?: StringProperty[]
      EndsWith?: StringProperty[]
      NotEquals?: StringProperty[]
      NotStartsWith?: StringProperty[]
      NotEndsWith?: StringProperty[]
    }[]
  }[]
  CreatedTimestamp?: StringProperty
  EventDataStoreArn?: StringProperty
  FederationEnabled?: boolean
  FederationRoleArn?: StringProperty
  MultiRegionEnabled?: boolean
  Name?: StringProperty
  OrganizationEnabled?: boolean
  BillingMode?: StringProperty
  RetentionPeriod?: number
  Status?: StringProperty
  TerminationProtectionEnabled?: boolean
  UpdatedTimestamp?: StringProperty
  KmsKeyId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  InsightSelectors?: {
    InsightType?: StringProperty
  }[]
  InsightsDestination?: StringProperty
  MaxEventSize?: (string | "Standard" | "Large")
  ContextKeySelectors?: {
    Type: (string | "RequestContext" | "TagContext")
    Equals: StringProperty[]
  }[]
  IngestionEnabled?: boolean
}

export const AWSCloudTrailEventDataStore = ({
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
      Type: 'AWS::CloudTrail::EventDataStore',
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