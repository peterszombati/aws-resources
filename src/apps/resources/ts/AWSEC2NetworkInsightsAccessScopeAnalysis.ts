import {StringProperty} from "../StringProperty"


type Properties = {
  NetworkInsightsAccessScopeAnalysisId?: StringProperty
  NetworkInsightsAccessScopeAnalysisArn?: StringProperty
  NetworkInsightsAccessScopeId: StringProperty
  Status?: (string | "running" | "failed" | "succeeded")
  StatusMessage?: StringProperty
  StartDate?: StringProperty
  EndDate?: StringProperty
  FindingsFound?: (string | "true" | "false" | "unknown")
  AnalyzedEniCount?: number
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSEC2NetworkInsightsAccessScopeAnalysis = ({
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
      Type: 'AWS::EC2::NetworkInsightsAccessScopeAnalysis',
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