import {StringProperty} from "../StringProperty"


type Properties = {
  ConnectionEvents: StringProperty[]
  VPCEndpointId?: StringProperty
  VPCEndpointConnectionNotificationId?: StringProperty
  ConnectionNotificationArn: StringProperty
  ServiceId?: StringProperty
}

export const AWSEC2VPCEndpointConnectionNotification = ({
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
      Type: 'AWS::EC2::VPCEndpointConnectionNotification',
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