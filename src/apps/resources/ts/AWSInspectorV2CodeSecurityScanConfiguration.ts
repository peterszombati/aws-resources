import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Level?: (string | "ORGANIZATION" | "ACCOUNT")
  Configuration?: {
    periodicScanConfiguration?: {
      frequency?: (string | "WEEKLY" | "MONTHLY" | "NEVER")
      frequencyExpression?: StringProperty
    }
    continuousIntegrationScanConfiguration?: {
      supportedEvents: (string | "PULL_REQUEST" | "PUSH")[]
    }
    ruleSetCategories: (string | "SAST" | "IAC" | "SCA")[]
  }
  ScopeSettings?: {
    projectSelectionScope?: (string | "ALL")
  }
  Arn?: StringProperty
  Tags?: Record<string, any>
}

export const AWSInspectorV2CodeSecurityScanConfiguration = ({
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
      Type: 'AWS::InspectorV2::CodeSecurityScanConfiguration',
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