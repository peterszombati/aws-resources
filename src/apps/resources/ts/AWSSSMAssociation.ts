import {StringProperty} from "../StringProperty"


type Properties = {
  AssociationName?: StringProperty
  CalendarNames?: StringProperty[]
  ScheduleExpression?: StringProperty
  MaxErrors?: StringProperty
  Parameters?: Record<string, any>
  InstanceId?: StringProperty
  WaitForSuccessTimeoutSeconds?: number
  MaxConcurrency?: StringProperty
  ComplianceSeverity?: (string | "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "UNSPECIFIED")
  Targets?: {
    Values: StringProperty[]
    Key: StringProperty
  }[]
  SyncCompliance?: (string | "AUTO" | "MANUAL")
  OutputLocation?: {
    S3Location?: {
      OutputS3KeyPrefix?: StringProperty
      OutputS3Region?: StringProperty
      OutputS3BucketName?: StringProperty
    }
  }
  ScheduleOffset?: number
  Name: StringProperty
  ApplyOnlyAtCronInterval?: boolean
  DocumentVersion?: StringProperty
  AssociationId?: StringProperty
  AutomationTargetParameterName?: StringProperty
}

export const AWSSSMAssociation = ({
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
      Type: 'AWS::SSM::Association',
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