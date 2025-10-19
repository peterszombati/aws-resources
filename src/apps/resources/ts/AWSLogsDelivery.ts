import {StringProperty} from "../StringProperty"


type Properties = {
  DeliveryId?: StringProperty
  Arn?: StringProperty
  DeliverySourceName: StringProperty
  DeliveryDestinationArn: StringProperty
  DeliveryDestinationType?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  RecordFields?: StringProperty[]
  FieldDelimiter?: StringProperty
  S3SuffixPath?: StringProperty
  S3EnableHiveCompatiblePath?: boolean
}

export const AWSLogsDelivery = ({
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
      Type: 'AWS::Logs::Delivery',
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