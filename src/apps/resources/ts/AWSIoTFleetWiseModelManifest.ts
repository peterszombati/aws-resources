import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreationTime?: StringProperty
  Description?: StringProperty
  LastModificationTime?: StringProperty
  Name: StringProperty
  Nodes?: StringProperty[]
  SignalCatalogArn: StringProperty
  Status?: (string | "ACTIVE" | "DRAFT")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTFleetWiseModelManifest = ({
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
      Type: 'AWS::IoTFleetWise::ModelManifest',
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