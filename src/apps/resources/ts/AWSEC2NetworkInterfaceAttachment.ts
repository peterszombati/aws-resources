import {StringProperty} from "../StringProperty"


type Properties = {
  AttachmentId?: StringProperty
  DeleteOnTermination?: boolean
  DeviceIndex: StringProperty
  InstanceId: StringProperty
  NetworkInterfaceId: StringProperty
  EnaSrdSpecification?: {
    EnaSrdEnabled?: boolean
    EnaSrdUdpSpecification?: {
      EnaSrdUdpEnabled?: boolean
    }
  }
  EnaQueueCount?: number
}

export const AWSEC2NetworkInterfaceAttachment = ({
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
      Type: 'AWS::EC2::NetworkInterfaceAttachment',
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