import {StringProperty} from "../StringProperty"


type Properties = {
  Widgets?: {
    QueryStatement: StringProperty
    QueryParameters?: StringProperty[]
    ViewProperties?: Record<string, any>
  }[]
  CreatedTimestamp?: StringProperty
  DashboardArn?: StringProperty
  RefreshSchedule?: {
    Frequency?: {
      Unit: (string | "HOURS" | "DAYS")
      Value: number
    }
    TimeOfDay?: StringProperty
    Status?: (string | "ENABLED" | "DISABLED")
  }
  Name?: StringProperty
  Status?: (string | "CREATING" | "CREATED" | "UPDATING" | "UPDATED" | "DELETING")
  TerminationProtectionEnabled?: boolean
  Type?: (string | "MANAGED" | "CUSTOM")
  UpdatedTimestamp?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCloudTrailDashboard = ({
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
      Type: 'AWS::CloudTrail::Dashboard',
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