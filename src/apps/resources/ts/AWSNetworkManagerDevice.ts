import {StringProperty} from "../StringProperty"


type Properties = {
  DeviceArn?: StringProperty
  DeviceId?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  GlobalNetworkId: StringProperty
  AWSLocation?: {
    Zone?: StringProperty
    SubnetArn?: StringProperty
  }
  Location?: {
    Address?: StringProperty
    Latitude?: StringProperty
    Longitude?: StringProperty
  }
  Model?: StringProperty
  SerialNumber?: StringProperty
  SiteId?: StringProperty
  Type?: StringProperty
  Vendor?: StringProperty
  CreatedAt?: StringProperty
  State?: StringProperty
}

export const AWSNetworkManagerDevice = ({
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
      Type: 'AWS::NetworkManager::Device',
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