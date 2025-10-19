import {StringProperty} from "../StringProperty"


type Properties = {
  AssetId?: StringProperty
  AssetExternalId?: StringProperty
  AssetModelId: StringProperty
  AssetArn?: StringProperty
  AssetName: StringProperty
  AssetDescription?: StringProperty
  AssetProperties?: {
    Id?: StringProperty
    ExternalId?: StringProperty
    LogicalId?: StringProperty
    Alias?: StringProperty
    NotificationState?: (string | "ENABLED" | "DISABLED")
    Unit?: StringProperty
  }[]
  AssetHierarchies?: {
    Id?: StringProperty
    ExternalId?: StringProperty
    LogicalId?: StringProperty
    ChildAssetId: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTSiteWiseAsset = ({
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
      Type: 'AWS::IoTSiteWise::Asset',
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