import {StringProperty} from "../StringProperty"


type Properties = {
  ListenerArn: StringProperty
  EndpointGroupRegion: StringProperty
  EndpointConfigurations?: {
    EndpointId: StringProperty
    AttachmentArn?: StringProperty
    Weight?: number
    ClientIPPreservationEnabled?: boolean
  }[]
  TrafficDialPercentage?: number
  HealthCheckPort?: number
  HealthCheckProtocol?: (string | "TCP" | "HTTP" | "HTTPS")
  HealthCheckPath?: StringProperty
  HealthCheckIntervalSeconds?: number
  ThresholdCount?: number
  EndpointGroupArn?: StringProperty
  PortOverrides?: {
    ListenerPort: number
    EndpointPort: number
  }[]
}

export const AWSGlobalAcceleratorEndpointGroup = ({
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
      Type: 'AWS::GlobalAccelerator::EndpointGroup',
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