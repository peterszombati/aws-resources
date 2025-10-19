import {StringProperty} from "../StringProperty"


type Properties = {
  TargetType: (string | "THING_GROUP" | "CLIENT_ID" | "SOURCE_IP" | "PRINCIPAL_ID" | "EVENT_TYPE")
  TargetName: StringProperty
  LogLevel: (string | "ERROR" | "WARN" | "INFO" | "DEBUG" | "DISABLED")
  TargetId?: StringProperty
}

export const AWSIoTResourceSpecificLogging = ({
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
      Type: 'AWS::IoT::ResourceSpecificLogging',
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