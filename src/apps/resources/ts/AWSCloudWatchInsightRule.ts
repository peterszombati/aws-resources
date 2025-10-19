import {StringProperty} from "../StringProperty"


type Properties = {
  RuleState: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  RuleBody: StringProperty
  ApplyOnTransformedLogs?: boolean
  RuleName: StringProperty
  Tags?: Record<string, any>
}

export const AWSCloudWatchInsightRule = ({
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
      Type: 'AWS::CloudWatch::InsightRule',
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