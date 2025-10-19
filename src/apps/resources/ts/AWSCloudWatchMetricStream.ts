import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreationDate?: StringProperty
  ExcludeFilters?: {
    Namespace: StringProperty
    MetricNames?: StringProperty[]
  }[]
  FirehoseArn?: StringProperty
  IncludeFilters?: {
    Namespace: StringProperty
    MetricNames?: StringProperty[]
  }[]
  LastUpdateDate?: StringProperty
  Name?: StringProperty
  RoleArn?: StringProperty
  State?: StringProperty
  OutputFormat?: StringProperty
  StatisticsConfigurations?: {
    AdditionalStatistics: StringProperty[]
    IncludeMetrics: {
      MetricName: StringProperty
      Namespace: StringProperty
    }[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  IncludeLinkedAccountsMetrics?: boolean
}

export const AWSCloudWatchMetricStream = ({
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
      Type: 'AWS::CloudWatch::MetricStream',
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