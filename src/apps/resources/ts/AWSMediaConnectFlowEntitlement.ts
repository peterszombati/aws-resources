import {StringProperty} from "../StringProperty"


type Properties = {
  FlowArn: StringProperty
  EntitlementArn?: StringProperty
  DataTransferSubscriberFeePercent?: number
  Description: StringProperty
  Encryption?: {
    Algorithm: (string | "aes128" | "aes192" | "aes256")
    ConstantInitializationVector?: StringProperty
    DeviceId?: StringProperty
    KeyType?: (string | "speke" | "static-key")
    Region?: StringProperty
    ResourceId?: StringProperty
    RoleArn: StringProperty
    SecretArn?: StringProperty
    Url?: StringProperty
  }
  EntitlementStatus?: (string | "ENABLED" | "DISABLED")
  Name: StringProperty
  Subscribers: StringProperty[]
}

export const AWSMediaConnectFlowEntitlement = ({
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
      Type: 'AWS::MediaConnect::FlowEntitlement',
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