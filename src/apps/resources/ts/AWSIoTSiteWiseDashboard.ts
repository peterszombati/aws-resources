import {StringProperty} from "../StringProperty"


type Properties = {
  ProjectId?: StringProperty
  DashboardId?: StringProperty
  DashboardName: StringProperty
  DashboardDescription: StringProperty
  DashboardDefinition: StringProperty
  DashboardArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTSiteWiseDashboard = ({
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
      Type: 'AWS::IoTSiteWise::Dashboard',
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