import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AssociatedAlarms?: Record<string, any>
  Description?: StringProperty
  ExecutionRole: StringProperty
  Name: StringProperty
  Owner?: StringProperty
  PrimaryRegion?: StringProperty
  RecoveryApproach: (string | "activeActive" | "activePassive")
  RecoveryTimeObjectiveMinutes?: number
  Regions: StringProperty[]
  Tags?: Record<string, any>
  Triggers?: {
    Description?: StringProperty
    TargetRegion: StringProperty
    Action: (string | "activate" | "deactivate")
    Conditions: {
      AssociatedAlarmName: StringProperty
      Condition: (string | "red" | "green")
    }[]
    MinDelayMinutesBetweenExecutions: number
  }[]
  Version?: StringProperty
  Workflows: {
    Steps?: {
      Name: StringProperty
      Description?: StringProperty
      ExecutionBlockConfiguration: any
      ExecutionBlockType: (string | "CustomActionLambda" | "ManualApproval" | "AuroraGlobalDatabase" | "EC2AutoScaling" | "ARCRoutingControl" | "ARCRegionSwitchPlan" | "Parallel" | "ECSServiceScaling" | "EKSResourceScaling" | "Route53HealthCheck")
    }[]
    WorkflowTargetAction: (string | "activate" | "deactivate")
    WorkflowTargetRegion?: StringProperty
    WorkflowDescription?: StringProperty
  }[]
  HealthChecksForPlan?: Record<string, any>
  Route53HealthChecks?: {
    HealthCheckIds?: StringProperty[]
    RecordNames?: StringProperty[]
    Regions?: StringProperty[]
    HostedZoneIds?: StringProperty[]
  }
  PlanHealthChecks?: StringProperty[]
}

export const AWSARCRegionSwitchPlan = ({
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
      Type: 'AWS::ARCRegionSwitch::Plan',
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