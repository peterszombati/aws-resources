import {StringProperty} from "../StringProperty"


type Properties = {
  FindingPublishingFrequency?: StringProperty
  Enable: boolean
  DataSources?: {
    S3Logs?: {
      Enable: boolean
    }
    Kubernetes?: {
      AuditLogs: {
        Enable: boolean
      }
    }
    MalwareProtection?: {
      ScanEc2InstanceWithFindings?: {
        EbsVolumes?: boolean
      }
    }
  }
  Features?: {
    Name: StringProperty
    Status: (string | "ENABLED" | "DISABLED")
    AdditionalConfiguration?: {
      Name?: StringProperty
      Status?: StringProperty
    }[]
  }[]
  Id?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGuardDutyDetector = ({
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
      Type: 'AWS::GuardDuty::Detector',
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