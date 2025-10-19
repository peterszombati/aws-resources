import {StringProperty} from "../StringProperty"


type Properties = {
  IamIdentityCenterOptions?: {
    Enabled?: boolean
    IamIdentityCenterInstanceArn?: any
    IamRoleForIdentityCenterApplicationArn?: StringProperty
  }
  Arn?: StringProperty
  Id?: StringProperty
  Name: StringProperty
  Endpoint?: StringProperty
  AppConfigs?: {
    Key: (string | "opensearchDashboards.dashboardAdmin.users" | "opensearchDashboards.dashboardAdmin.groups")
    Value: StringProperty
  }[]
  DataSources?: {
    DataSourceArn: any
    DataSourceDescription?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSOpenSearchServiceApplication = ({
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
      Type: 'AWS::OpenSearchService::Application',
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