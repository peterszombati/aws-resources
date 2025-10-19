import {StringProperty} from "../StringProperty"


type Properties = {
  RuleName: StringProperty
  Rule: {
    Source: {
      Regions: StringProperty[]
      Scope?: StringProperty
      SourceLogsConfiguration?: {
        LogGroupSelectionCriteria: StringProperty
        EncryptedLogGroupStrategy: (string | "ALLOW" | "SKIP")
      }
    }
    Destination: {
      Region: StringProperty
      Account?: StringProperty
      DestinationLogsConfiguration?: {
        LogsEncryptionConfiguration?: {
          EncryptionStrategy: (string | "CUSTOMER_MANAGED" | "AWS_OWNED")
          KmsKeyArn?: StringProperty
          EncryptionConflictResolutionStrategy?: (string | "ALLOW" | "SKIP")
        }
        BackupConfiguration?: {
          Region: StringProperty
          KmsKeyArn?: StringProperty
        }
      }
    }
  }
  RuleArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSObservabilityAdminOrganizationCentralizationRule = ({
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
      Type: 'AWS::ObservabilityAdmin::OrganizationCentralizationRule',
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