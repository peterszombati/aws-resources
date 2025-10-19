import {StringProperty} from "../StringProperty"


type Properties = {
  PrivateIpAddress?: StringProperty
  InstanceId?: StringProperty
  AllocationId?: StringProperty
  Id?: StringProperty
  NetworkInterfaceId?: StringProperty
  EIP?: StringProperty
}

export const AWSEC2EIPAssociation = ({
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
      Type: 'AWS::EC2::EIPAssociation',
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