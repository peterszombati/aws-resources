import {StringProperty} from "../StringProperty"

type HistoricalOptions = {
  BudgetAdjustmentPeriod: number
}

type CostCategoryValues = {
  Values?: StringProperty[]
  Key?: StringProperty
  MatchOptions?: StringProperty[]
}

type BudgetData = {
  TimePeriod?: TimePeriod
  PlannedBudgetLimits?: Record<string, any>
  CostFilters?: Record<string, any>
  CostTypes?: CostTypes
  BudgetType: StringProperty
  Metrics?: StringProperty[]
  BudgetLimit?: Spend
  BillingViewArn?: StringProperty
  AutoAdjustData?: AutoAdjustData
  TimeUnit: StringProperty
  FilterExpression?: Expression
  BudgetName?: StringProperty
}

type TimePeriod = {
  Start?: StringProperty
  End?: StringProperty
}

type NotificationWithSubscribers = {
  Subscribers: Subscriber[]
  Notification: Notification
}

type Notification = {
  ComparisonOperator: StringProperty
  NotificationType: StringProperty
  Threshold: number
  ThresholdType?: StringProperty
}

type CostTypes = {
  IncludeSupport?: boolean
  IncludeOtherSubscription?: boolean
  IncludeTax?: boolean
  IncludeSubscription?: boolean
  UseBlended?: boolean
  IncludeUpfront?: boolean
  IncludeDiscount?: boolean
  IncludeCredit?: boolean
  IncludeRecurring?: boolean
  UseAmortized?: boolean
  IncludeRefund?: boolean
}

type TagValues = {
  Values?: StringProperty[]
  Key?: StringProperty
  MatchOptions?: StringProperty[]
}

type ResourceTag = {
  Value?: StringProperty
  Key: StringProperty
}

type Subscriber = {
  Address: StringProperty
  SubscriptionType: StringProperty
}

type Expression = {
  Not?: Expression
  Or?: Expression[]
  And?: Expression[]
  Dimensions?: ExpressionDimensionValues
  CostCategories?: CostCategoryValues
  Tags?: TagValues
}

type Spend = {
  Unit: StringProperty
  Amount: number
}

type AutoAdjustData = {
  AutoAdjustType: StringProperty
  HistoricalOptions?: HistoricalOptions
}

type ExpressionDimensionValues = {
  Values?: StringProperty[]
  Key?: StringProperty
  MatchOptions?: StringProperty[]
}


type Properties = {
  Budget: BudgetData
  Id?: StringProperty
  NotificationsWithSubscribers?: NotificationWithSubscribers[]
  ResourceTags?: ResourceTag[]
}

export const AWSBudgetsBudget = ({
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
      Type: 'AWS::Budgets::Budget',
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