import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Expression: StringProperty
  ExpressionType: (string | "RuleName" | "MqttTopic" | "SnsTopic")
  Description?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  RoleArn?: StringProperty
  Arn?: StringProperty
}

export const AWSIoTWirelessDestination = ({
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
      Type: 'AWS::IoTWireless::Destination',
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