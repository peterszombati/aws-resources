import {StringProperty} from "../StringProperty"


type Properties = {
  ActionId?: StringProperty
  BudgetName: StringProperty
  NotificationType: (string | "ACTUAL" | "FORECASTED")
  ActionType: (string | "APPLY_IAM_POLICY" | "APPLY_SCP_POLICY" | "RUN_SSM_DOCUMENTS")
  ActionThreshold: {
    Value: number
    Type: (string | "PERCENTAGE" | "ABSOLUTE_VALUE")
  }
  ExecutionRoleArn: StringProperty
  ApprovalModel?: (string | "AUTOMATIC" | "MANUAL")
  Subscribers: {
    Type: (string | "SNS" | "EMAIL")
    Address: StringProperty
  }[]
  Definition: {
    IamActionDefinition?: {
      PolicyArn: StringProperty
      Roles?: StringProperty[]
      Groups?: StringProperty[]
      Users?: StringProperty[]
    }
    ScpActionDefinition?: {
      PolicyId: StringProperty
      TargetIds: StringProperty[]
    }
    SsmActionDefinition?: {
      Subtype: (string | "STOP_EC2_INSTANCES" | "STOP_RDS_INSTANCES")
      Region: StringProperty
      InstanceIds: StringProperty[]
    }
  }
  ResourceTags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSBudgetsBudgetsAction = ({
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
      Type: 'AWS::Budgets::BudgetsAction',
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