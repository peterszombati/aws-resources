import {StringProperty} from "../StringProperty"


type Properties = {
  GlobalNetworkId: StringProperty
  CustomerGatewayArn: StringProperty
  DeviceId: StringProperty
  LinkId?: StringProperty
}

export const AWSNetworkManagerCustomerGatewayAssociation = ({
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
      Type: 'AWS::NetworkManager::CustomerGatewayAssociation',
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