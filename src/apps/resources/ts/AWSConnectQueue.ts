import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  Description?: StringProperty
  HoursOfOperationArn: StringProperty
  MaxContacts?: number
  Name: StringProperty
  OutboundCallerConfig?: {
    OutboundCallerIdName?: StringProperty
    OutboundCallerIdNumberArn?: StringProperty
    OutboundFlowArn?: StringProperty
  }
  OutboundEmailConfig?: {
    OutboundEmailAddressId?: StringProperty
  }
  QueueArn?: StringProperty
  Status?: (string | "ENABLED" | "DISABLED")
  QuickConnectArns?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Type?: (string | "STANDARD" | "AGENT")
}

export const AWSConnectQueue = ({
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
      Type: 'AWS::Connect::Queue',
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