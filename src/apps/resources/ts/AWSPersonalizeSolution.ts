import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  SolutionArn?: StringProperty
  EventType?: StringProperty
  DatasetGroupArn: StringProperty
  PerformAutoML?: boolean
  PerformHPO?: boolean
  RecipeArn?: StringProperty
  SolutionConfig?: {
    AlgorithmHyperParameters?: Record<string, any>
    AutoMLConfig?: {
      MetricName?: StringProperty
      RecipeList?: StringProperty[]
    }
    EventValueThreshold?: StringProperty
    FeatureTransformationParameters?: Record<string, any>
    HpoConfig?: {
      AlgorithmHyperParameterRanges?: {
        CategoricalHyperParameterRanges?: {
          Name?: StringProperty
          Values?: StringProperty[]
        }[]
        ContinuousHyperParameterRanges?: {
          Name?: StringProperty
          MinValue?: number
          MaxValue?: number
        }[]
        IntegerHyperParameterRanges?: {
          Name?: StringProperty
          MinValue?: number
          MaxValue?: number
        }[]
      }
      HpoObjective?: {
        MetricName?: StringProperty
        Type?: (string | "Maximize" | "Minimize")
        MetricRegex?: StringProperty
      }
      HpoResourceConfig?: {
        MaxNumberOfTrainingJobs?: StringProperty
        MaxParallelTrainingJobs?: StringProperty
      }
    }
  }
}

export const AWSPersonalizeSolution = ({
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
      Type: 'AWS::Personalize::Solution',
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