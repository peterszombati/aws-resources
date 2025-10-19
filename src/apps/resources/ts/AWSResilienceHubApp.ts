import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  AppArn?: StringProperty
  ResiliencyPolicyArn?: StringProperty
  Tags?: Record<string, any>
  AppTemplateBody: StringProperty
  ResourceMappings: {
    LogicalStackName?: StringProperty
    MappingType: StringProperty
    ResourceName?: StringProperty
    TerraformSourceName?: StringProperty
    EksSourceName?: StringProperty
    PhysicalResourceId: {
      AwsAccountId?: StringProperty
      AwsRegion?: StringProperty
      Identifier: StringProperty
      Type: StringProperty
    }
  }[]
  AppAssessmentSchedule?: (string | "Disabled" | "Daily")
  PermissionModel?: {
    Type: (string | "LegacyIAMUser" | "RoleBased")
    InvokerRoleName?: StringProperty
    CrossAccountRoleArns?: StringProperty[]
  }
  EventSubscriptions?: {
    Name: StringProperty
    EventType: (string | "ScheduledAssessmentFailure" | "DriftDetected")
    SnsTopicArn?: StringProperty
  }[]
  DriftStatus?: (string | "NotChecked" | "NotDetected" | "Detected")
}

export const AWSResilienceHubApp = ({
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
      Type: 'AWS::ResilienceHub::App',
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