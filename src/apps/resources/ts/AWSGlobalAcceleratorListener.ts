import {StringProperty} from "../StringProperty"


type Properties = {
  ListenerArn?: StringProperty
  AcceleratorArn: StringProperty
  PortRanges: {
    FromPort: number
    ToPort: number
  }[]
  Protocol: (string | "TCP" | "UDP")
  ClientAffinity?: (string | "NONE" | "SOURCE_IP")
}

export const AWSGlobalAcceleratorListener = ({
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
      Type: 'AWS::GlobalAccelerator::Listener',
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