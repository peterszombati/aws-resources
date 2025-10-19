import {StringProperty} from "../StringProperty"


type Properties = {
  HostId?: StringProperty
  AutoPlacement?: StringProperty
  AvailabilityZone: StringProperty
  HostRecovery?: StringProperty
  InstanceType?: StringProperty
  InstanceFamily?: StringProperty
  OutpostArn?: StringProperty
  HostMaintenance?: StringProperty
  AssetId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2Host = ({
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
      Type: 'AWS::EC2::Host',
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