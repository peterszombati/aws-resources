import {StringProperty} from "../StringProperty"


type Properties = {
  PortalAuthMode?: StringProperty
  PortalArn?: StringProperty
  PortalClientId?: StringProperty
  PortalContactEmail: StringProperty
  PortalDescription?: StringProperty
  PortalId?: StringProperty
  PortalName: StringProperty
  PortalStartUrl?: StringProperty
  PortalType?: (string | "SITEWISE_PORTAL_V1" | "SITEWISE_PORTAL_V2")
  PortalTypeConfiguration?: Record<string, any>
  RoleArn: StringProperty
  NotificationSenderEmail?: StringProperty
  Alarms?: {
    AlarmRoleArn?: StringProperty
    NotificationLambdaArn?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTSiteWisePortal = ({
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
      Type: 'AWS::IoTSiteWise::Portal',
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