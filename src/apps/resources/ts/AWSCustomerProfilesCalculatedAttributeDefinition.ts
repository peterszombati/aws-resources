import {StringProperty} from "../StringProperty"


type Properties = {
  DomainName: StringProperty
  CalculatedAttributeName: StringProperty
  DisplayName?: StringProperty
  Description?: StringProperty
  AttributeDetails: {
    Attributes: {
      Name: StringProperty
    }[]
    Expression: StringProperty
  }
  Conditions?: {
    Range?: {
      Value?: number
      Unit: (string | "DAYS")
      ValueRange?: {
        Start: number
        End: number
      }
      TimestampSource?: StringProperty
      TimestampFormat?: StringProperty
    }
    ObjectCount?: number
    Threshold?: {
      Value: StringProperty
      Operator: (string | "EQUAL_TO" | "GREATER_THAN" | "LESS_THAN" | "NOT_EQUAL_TO")
    }
  }
  Statistic: (string | "FIRST_OCCURRENCE" | "LAST_OCCURRENCE" | "COUNT" | "SUM" | "MINIMUM" | "MAXIMUM" | "AVERAGE" | "MAX_OCCURRENCE")
  UseHistoricalData?: boolean
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  Status?: (string | "IN_PROGRESS" | "PREPARING" | "COMPLETED" | "FAILED")
  Readiness?: {
    ProgressPercentage?: number
    Message?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCustomerProfilesCalculatedAttributeDefinition = ({
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
      Type: 'AWS::CustomerProfiles::CalculatedAttributeDefinition',
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