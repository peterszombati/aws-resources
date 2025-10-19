import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Project: StringProperty
  Name: StringProperty
  Description?: StringProperty
  EvaluationStrategy?: (string | "ALL_RULES" | "DEFAULT_VARIATION")
  Variations: {
    VariationName?: StringProperty
    BooleanValue?: boolean
    StringValue?: StringProperty
    LongValue?: number
    DoubleValue?: number
  }[]
  DefaultVariation?: StringProperty
  EntityOverrides?: {
    EntityId?: StringProperty
    Variation?: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEvidentlyFeature = ({
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
      Type: 'AWS::Evidently::Feature',
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