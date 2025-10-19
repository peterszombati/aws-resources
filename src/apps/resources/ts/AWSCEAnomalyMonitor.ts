import {StringProperty} from "../StringProperty"


type Properties = {
  MonitorArn?: StringProperty
  MonitorType: (string | "DIMENSIONAL" | "CUSTOM")
  MonitorName: StringProperty
  CreationDate?: StringProperty
  LastEvaluatedDate?: StringProperty
  LastUpdatedDate?: StringProperty
  MonitorDimension?: (string | "SERVICE")
  MonitorSpecification?: StringProperty
  DimensionalValueCount?: number
  ResourceTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCEAnomalyMonitor = ({
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
      Type: 'AWS::CE::AnomalyMonitor',
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