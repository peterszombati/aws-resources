import {StringProperty} from "../StringProperty"


type Properties = {
  ReportPlanName?: StringProperty
  ReportPlanArn?: StringProperty
  ReportPlanDescription?: StringProperty
  ReportPlanTags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  ReportDeliveryChannel: {
    Formats?: StringProperty[]
    S3BucketName: StringProperty
    S3KeyPrefix?: StringProperty
  }
  ReportSetting: {
    ReportTemplate: StringProperty
    FrameworkArns?: StringProperty[]
    Accounts?: StringProperty[]
    OrganizationUnits?: StringProperty[]
    Regions?: StringProperty[]
  }
}

export const AWSBackupReportPlan = ({
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
      Type: 'AWS::Backup::ReportPlan',
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