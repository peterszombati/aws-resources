import {StringProperty} from "../StringProperty"


type Properties = {
  DomainName: StringProperty
  EventTriggerName: StringProperty
  ObjectTypeName: StringProperty
  Description?: StringProperty
  EventTriggerConditions: {
    EventTriggerDimensions: {
      ObjectAttributes: {
        Source?: StringProperty
        FieldName?: StringProperty
        ComparisonOperator: (string | "INCLUSIVE" | "EXCLUSIVE" | "CONTAINS" | "BEGINS_WITH" | "ENDS_WITH" | "GREATER_THAN" | "LESS_THAN" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN_OR_EQUAL" | "EQUAL" | "BEFORE" | "AFTER" | "ON" | "BETWEEN" | "NOT_BETWEEN")
        Values: StringProperty[]
      }[]
    }[]
    LogicalOperator: (string | "ANY" | "ALL" | "NONE")
  }[]
  EventTriggerLimits?: {
    EventExpiration?: number /* schema format: int64*/
    Periods?: {
      Unit: (string | "HOURS" | "DAYS" | "WEEKS" | "MONTHS")
      Value: number
      MaxInvocationsPerProfile?: number
      Unlimited?: boolean
    }[]
  }
  SegmentFilter?: StringProperty
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCustomerProfilesEventTrigger = ({
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
      Type: 'AWS::CustomerProfiles::EventTrigger',
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