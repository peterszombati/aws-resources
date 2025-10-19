import {StringProperty} from "../StringProperty"


type Properties = {
  FieldSelectionCriteria?: StringProperty
  MetricTransformations: {
    DefaultValue?: number
    MetricName: StringProperty
    MetricValue: StringProperty
    MetricNamespace: StringProperty
    Dimensions?: {
      Value: StringProperty
      Key: StringProperty
    }[]
    Unit?: (string | "Seconds" | "Microseconds" | "Milliseconds" | "Bytes" | "Kilobytes" | "Megabytes" | "Gigabytes" | "Terabytes" | "Bits" | "Kilobits" | "Megabits" | "Gigabits" | "Terabits" | "Percent" | "Count" | "Bytes/Second" | "Kilobytes/Second" | "Megabytes/Second" | "Gigabytes/Second" | "Terabytes/Second" | "Bits/Second" | "Kilobits/Second" | "Megabits/Second" | "Gigabits/Second" | "Terabits/Second" | "Count/Second" | "None")
  }[]
  FilterPattern: StringProperty
  EmitSystemFieldDimensions?: StringProperty[]
  LogGroupName: StringProperty
  ApplyOnTransformedLogs?: boolean
  FilterName?: StringProperty
}

export const AWSLogsMetricFilter = ({
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
      Type: 'AWS::Logs::MetricFilter',
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