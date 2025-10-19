import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Name?: StringProperty
  DesktopArn: StringProperty
  DesktopEndpoint?: StringProperty
  DesktopType?: (string | "workspaces" | "appstream" | "workspaces-web")
  ActivationCode?: StringProperty
  RegisteredDevicesCount?: number
  SoftwareSetUpdateSchedule?: (string | "USE_MAINTENANCE_WINDOW" | "APPLY_IMMEDIATELY")
  MaintenanceWindow?: {
    Type: (string | "SYSTEM" | "CUSTOM")
    StartTimeHour?: number
    StartTimeMinute?: number
    EndTimeHour?: number
    EndTimeMinute?: number
    DaysOfTheWeek?: (string | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY")[]
    ApplyTimeOf?: (string | "UTC" | "DEVICE")
  }
  SoftwareSetUpdateMode?: (string | "USE_LATEST" | "USE_DESIRED")
  DesiredSoftwareSetId?: StringProperty
  PendingSoftwareSetId?: StringProperty
  PendingSoftwareSetVersion?: StringProperty
  SoftwareSetComplianceStatus?: (string | "COMPLIANT" | "NOT_COMPLIANT" | "NO_REGISTERED_DEVICES")
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  Arn?: StringProperty
  KmsKeyArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  DeviceCreationTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWorkSpacesThinClientEnvironment = ({
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
      Type: 'AWS::WorkSpacesThinClient::Environment',
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