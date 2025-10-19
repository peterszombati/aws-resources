import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  DeliverCrossAccountRole?: StringProperty
  DeliverLogsPermissionArn?: StringProperty
  LogDestination?: StringProperty
  LogDestinationType?: (string | "cloud-watch-logs" | "s3" | "kinesis-data-firehose")
  LogFormat?: StringProperty
  LogGroupName?: StringProperty
  MaxAggregationInterval?: number
  ResourceId: StringProperty
  ResourceType: (string | "NetworkInterface" | "Subnet" | "VPC" | "TransitGateway" | "TransitGatewayAttachment")
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  TrafficType?: (string | "ACCEPT" | "ALL" | "REJECT")
  DestinationOptions?: {
    FileFormat: (string | "plain-text" | "parquet")
    HiveCompatiblePartitions: boolean
    PerHourPartition: boolean
  }
}

export const AWSEC2FlowLog = ({
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
      Type: 'AWS::EC2::FlowLog',
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