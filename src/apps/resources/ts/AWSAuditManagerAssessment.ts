import {StringProperty} from "../StringProperty"


type Properties = {
  FrameworkId?: StringProperty
  AssessmentId?: StringProperty
  AwsAccount?: {
    Id?: StringProperty
    EmailAddress?: StringProperty
    Name?: StringProperty
  }
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Delegations?: {
    LastUpdated?: number
    ControlSetId?: StringProperty
    CreationTime?: number
    CreatedBy?: StringProperty
    RoleArn?: StringProperty
    AssessmentName?: StringProperty
    Comment?: StringProperty
    Id?: StringProperty
    RoleType?: (string | "PROCESS_OWNER" | "RESOURCE_OWNER")
    AssessmentId?: StringProperty
    Status?: (string | "IN_PROGRESS" | "UNDER_REVIEW" | "COMPLETE")
  }[]
  Roles?: {
    RoleArn?: StringProperty
    RoleType?: (string | "PROCESS_OWNER" | "RESOURCE_OWNER")
  }[]
  Scope?: {
    AwsAccounts?: {
      Id?: StringProperty
      EmailAddress?: StringProperty
      Name?: StringProperty
    }[]
    AwsServices?: {
      ServiceName?: StringProperty
    }[]
  }
  AssessmentReportsDestination?: {
    Destination?: StringProperty
    DestinationType?: (string | "S3")
  }
  Status?: (string | "ACTIVE" | "INACTIVE")
  CreationTime?: number
  Name?: StringProperty
  Description?: StringProperty
}

export const AWSAuditManagerAssessment = ({
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
      Type: 'AWS::AuditManager::Assessment',
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