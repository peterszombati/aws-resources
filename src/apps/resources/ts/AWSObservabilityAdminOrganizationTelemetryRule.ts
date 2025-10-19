import {StringProperty} from "../StringProperty"


type Properties = {
  RuleName: StringProperty
  Rule: {
    ResourceType: (string | "AWS::EC2::VPC")
    TelemetryType: (string | "Logs")
    DestinationConfiguration?: {
      DestinationType?: (string | "cloud-watch-logs")
      DestinationPattern?: StringProperty
      RetentionInDays?: number
      VPCFlowLogParameters?: {
        LogFormat?: StringProperty
        TrafficType?: StringProperty
        MaxAggregationInterval?: number
      }
    }
    Scope?: StringProperty
    SelectionCriteria?: StringProperty
  }
  RuleArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSObservabilityAdminOrganizationTelemetryRule = ({
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
      Type: 'AWS::ObservabilityAdmin::OrganizationTelemetryRule',
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