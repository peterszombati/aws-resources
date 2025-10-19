import {StringProperty} from "../StringProperty"


type Properties = {
  PortalId: StringProperty
  ProjectId?: StringProperty
  ProjectName: StringProperty
  ProjectDescription?: StringProperty
  ProjectArn?: StringProperty
  AssetIds?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTSiteWiseProject = ({
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
      Type: 'AWS::IoTSiteWise::Project',
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