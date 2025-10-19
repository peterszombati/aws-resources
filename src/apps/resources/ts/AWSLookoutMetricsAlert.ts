import {StringProperty} from "../StringProperty"


type Properties = {
  AlertName?: StringProperty
  Arn?: StringProperty
  AlertDescription?: StringProperty
  AnomalyDetectorArn: StringProperty
  AlertSensitivityThreshold: number
  Action: {
    SNSConfiguration?: {
      RoleArn: StringProperty
      SnsTopicArn: StringProperty
    }
    LambdaConfiguration?: {
      RoleArn: StringProperty
      LambdaArn: StringProperty
    }
  }
}

export const AWSLookoutMetricsAlert = ({
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
      Type: 'AWS::LookoutMetrics::Alert',
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