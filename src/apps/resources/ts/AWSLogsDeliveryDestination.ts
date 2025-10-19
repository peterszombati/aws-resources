import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Arn?: StringProperty
  DestinationResourceArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  DeliveryDestinationType?: StringProperty
  DeliveryDestinationPolicy?: {
    DeliveryDestinationName?: StringProperty
    DeliveryDestinationPolicy?: Record<string, any>
  }
  OutputFormat?: StringProperty
}

export const AWSLogsDeliveryDestination = ({
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
      Type: 'AWS::Logs::DeliveryDestination',
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