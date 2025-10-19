import {StringProperty} from "../StringProperty"


type Properties = {
  CustomPermissionsName: StringProperty
  Capabilities?: {
    IncludeContentInScheduledReportsEmail?: (string | "DENY")
    ExportToCsvInScheduledReports?: (string | "DENY")
    CreateAndUpdateDataSources?: (string | "DENY")
    ViewAccountSPICECapacity?: (string | "DENY")
    Dashboard?: (string | "DENY")
    ExportToPdfInScheduledReports?: (string | "DENY")
    CreateSPICEDataset?: (string | "DENY")
    CreateAndUpdateDatasets?: (string | "DENY")
    PrintReports?: (string | "DENY")
    ShareDatasets?: (string | "DENY")
    ExportToExcelInScheduledReports?: (string | "DENY")
    CreateAndUpdateDashboardEmailReports?: (string | "DENY")
    CreateAndUpdateThresholdAlerts?: (string | "DENY")
    CreateSharedFolders?: (string | "DENY")
    ShareDashboards?: (string | "DENY")
    RenameSharedFolders?: (string | "DENY")
    AddOrRunAnomalyDetectionForAnalyses?: (string | "DENY")
    ShareDataSources?: (string | "DENY")
    ExportToExcel?: (string | "DENY")
    ExportToPdf?: (string | "DENY")
    ShareAnalyses?: (string | "DENY")
    SubscribeDashboardEmailReports?: (string | "DENY")
    Analysis?: (string | "DENY")
    ExportToCsv?: (string | "DENY")
    CreateAndUpdateThemes?: (string | "DENY")
  }
  AwsAccountId: StringProperty
  Arn?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSQuickSightCustomPermissions = ({
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
      Type: 'AWS::QuickSight::CustomPermissions',
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