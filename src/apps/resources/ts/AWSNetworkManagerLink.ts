import {StringProperty} from "../StringProperty"


type Properties = {
  LinkArn?: StringProperty
  LinkId?: StringProperty
  GlobalNetworkId: StringProperty
  SiteId: StringProperty
  Bandwidth: {
    DownloadSpeed?: number
    UploadSpeed?: number
  }
  Provider?: StringProperty
  Description?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Type?: StringProperty
  CreatedAt?: StringProperty
  State?: StringProperty
}

export const AWSNetworkManagerLink = ({
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
      Type: 'AWS::NetworkManager::Link',
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