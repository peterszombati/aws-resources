import {StringProperty} from "../StringProperty"


type Properties = {
  MetricName: StringProperty
  Description?: StringProperty
  QueryString?: StringProperty
  Period?: number
  AggregationField?: StringProperty
  QueryVersion?: StringProperty
  IndexName?: StringProperty
  Unit?: StringProperty
  AggregationType?: {
    Name: StringProperty
    Values: StringProperty[]
  }
  MetricArn?: StringProperty
  CreationDate?: StringProperty
  LastModifiedDate?: StringProperty
  Version?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTFleetMetric = ({
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
      Type: 'AWS::IoT::FleetMetric',
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