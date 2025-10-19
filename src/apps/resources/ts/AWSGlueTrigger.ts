import {StringProperty} from "../StringProperty"


type Properties = {
  Type: StringProperty
  StartOnCreation?: boolean
  Description?: StringProperty
  Actions: {
    NotificationProperty?: {
      NotifyDelayAfter?: number
    }
    CrawlerName?: StringProperty
    Timeout?: number
    JobName?: StringProperty
    Arguments?: Record<string, any>
    SecurityConfiguration?: StringProperty
  }[]
  EventBatchingCondition?: {
    BatchSize: number
    BatchWindow?: number
  }
  WorkflowName?: StringProperty
  Schedule?: StringProperty
  Tags?: Record<string, any>
  Name?: StringProperty
  Predicate?: {
    Logical?: StringProperty
    Conditions?: {
      JobName?: StringProperty
      CrawlerName?: StringProperty
      State?: StringProperty
      CrawlState?: StringProperty
      LogicalOperator?: StringProperty
    }[]
  }
}

export const AWSGlueTrigger = ({
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
      Type: 'AWS::Glue::Trigger',
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