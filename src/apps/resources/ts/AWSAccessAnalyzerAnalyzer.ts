import {StringProperty} from "../StringProperty"


type Properties = {
  AnalyzerName?: StringProperty
  ArchiveRules?: {
    Filter: {
      Contains?: StringProperty[]
      Eq?: StringProperty[]
      Exists?: boolean
      Property: StringProperty
      Neq?: StringProperty[]
    }[]
    RuleName: StringProperty
  }[]
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  Type: StringProperty
  AnalyzerConfiguration?: {
    UnusedAccessConfiguration?: {
      UnusedAccessAge?: number
      AnalysisRule?: {
        Exclusions?: {
          AccountIds?: StringProperty[]
          ResourceTags?: {
            Key: StringProperty
            Value?: StringProperty
          }[][]
        }[]
      }
    }
    InternalAccessConfiguration?: {
      InternalAccessAnalysisRule?: {
        Inclusions?: {
          AccountIds?: StringProperty[]
          ResourceArns?: StringProperty[]
          ResourceTypes?: StringProperty[]
        }[]
      }
    }
  }
}

export const AWSAccessAnalyzerAnalyzer = ({
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
      Type: 'AWS::AccessAnalyzer::Analyzer',
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