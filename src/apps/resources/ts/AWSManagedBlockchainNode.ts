import {StringProperty} from "../StringProperty"


type Properties = {
  NodeId?: StringProperty
  MemberId: StringProperty
  Arn?: StringProperty
  NetworkId: StringProperty
  NodeConfiguration: {
    InstanceType: StringProperty
    AvailabilityZone: StringProperty
  }
}

export const AWSManagedBlockchainNode = ({
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
      Type: 'AWS::ManagedBlockchain::Node',
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