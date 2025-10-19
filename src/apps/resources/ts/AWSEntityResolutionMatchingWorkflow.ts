import {StringProperty} from "../StringProperty"


type Properties = {
  WorkflowName: StringProperty
  Description?: StringProperty
  InputSourceConfig: {
    InputSourceARN: StringProperty
    SchemaArn: StringProperty
    ApplyNormalization?: boolean
  }[]
  OutputSourceConfig: {
    OutputS3Path: StringProperty
    Output: {
      Name: StringProperty
      Hashed?: boolean
    }[]
    KMSArn?: StringProperty
    ApplyNormalization?: boolean
  }[]
  ResolutionTechniques: {
    ResolutionType?: (string | "RULE_MATCHING" | "ML_MATCHING" | "PROVIDER")
    RuleBasedProperties?: {
      Rules: {
        RuleName: StringProperty
        MatchingKeys: StringProperty[]
      }[]
      AttributeMatchingModel: (string | "ONE_TO_ONE" | "MANY_TO_MANY")
      MatchPurpose?: (string | "IDENTIFIER_GENERATION" | "INDEXING")
    }
    RuleConditionProperties?: {
      Rules: {
        RuleName?: StringProperty
        Condition?: StringProperty
      }[]
    }
    ProviderProperties?: {
      ProviderServiceArn: StringProperty
      ProviderConfiguration?: Record<string, any>
      IntermediateSourceConfiguration?: {
        IntermediateS3Path: StringProperty
      }
    }
  }
  RoleArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  WorkflowArn?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  IncrementalRunConfig?: {
    IncrementalRunType: (string | "IMMEDIATE")
  }
}

export const AWSEntityResolutionMatchingWorkflow = ({
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
      Type: 'AWS::EntityResolution::MatchingWorkflow',
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