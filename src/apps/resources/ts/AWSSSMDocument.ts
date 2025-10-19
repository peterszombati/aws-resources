import {StringProperty} from "../StringProperty"


type Properties = {
  Content: Record<string, any> | StringProperty
  Attachments?: {
    Key?: (string | "SourceUrl" | "S3FileUrl" | "AttachmentReference")
    Values?: StringProperty[]
    Name?: StringProperty
  }[]
  Name?: StringProperty
  VersionName?: StringProperty
  DocumentType?: (string | "ApplicationConfiguration" | "ApplicationConfigurationSchema" | "Automation" | "Automation.ChangeTemplate" | "AutoApprovalPolicy" | "ChangeCalendar" | "CloudFormation" | "Command" | "DeploymentStrategy" | "ManualApprovalPolicy" | "Package" | "Policy" | "ProblemAnalysis" | "ProblemAnalysisTemplate" | "Session")
  DocumentFormat?: (string | "YAML" | "JSON" | "TEXT")
  TargetType?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
  Requires?: {
    Name?: StringProperty
    Version?: StringProperty
  }[]
  UpdateMethod?: (string | "Replace" | "NewVersion")
}

export const AWSSSMDocument = ({
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
      Type: 'AWS::SSM::Document',
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