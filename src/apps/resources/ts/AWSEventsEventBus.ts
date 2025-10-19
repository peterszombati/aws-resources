import {StringProperty} from "../StringProperty"


type Properties = {
  EventSourceName?: StringProperty
  Name: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Description?: StringProperty
  KmsKeyIdentifier?: StringProperty
  Policy?: Record<string, any> | StringProperty
  Arn?: StringProperty
  DeadLetterConfig?: {
    Arn?: StringProperty
  }
  LogConfig?: {
    IncludeDetail?: (string | "FULL" | "NONE")
    Level?: (string | "INFO" | "ERROR" | "TRACE" | "OFF")
  }
}

export const AWSEventsEventBus = ({
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
      Type: 'AWS::Events::EventBus',
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