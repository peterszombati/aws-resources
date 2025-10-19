import {StringProperty} from "../StringProperty"


type Properties = {
  Source: StringProperty
  Destination: StringProperty
  Metric: StringProperty
  Statistic: StringProperty
}

export const AWSEC2NetworkPerformanceMetricSubscription = ({
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
      Type: 'AWS::EC2::NetworkPerformanceMetricSubscription',
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