import {StringProperty} from "../StringProperty"


type Properties = {
  SiteArn?: StringProperty
  SiteId?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  GlobalNetworkId: StringProperty
  Location?: {
    Address?: StringProperty
    Latitude?: StringProperty
    Longitude?: StringProperty
  }
  CreatedAt?: StringProperty
  State?: StringProperty
}

export const AWSNetworkManagerSite = ({
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
      Type: 'AWS::NetworkManager::Site',
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