import {StringProperty} from "../StringProperty"


type Properties = {
  AccountId?: StringProperty
  KmsKeyId?: StringProperty
  DetectorName?: StringProperty
  LogGroupArnList?: StringProperty[]
  EvaluationFrequency?: (string | "FIVE_MIN" | "TEN_MIN" | "FIFTEEN_MIN" | "THIRTY_MIN" | "ONE_HOUR")
  FilterPattern?: StringProperty
  AnomalyDetectorStatus?: StringProperty
  AnomalyVisibilityTime?: number
  CreationTimeStamp?: number
  LastModifiedTimeStamp?: number
  AnomalyDetectorArn?: StringProperty
}

export const AWSLogsLogAnomalyDetector = ({
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
      Type: 'AWS::Logs::LogAnomalyDetector',
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