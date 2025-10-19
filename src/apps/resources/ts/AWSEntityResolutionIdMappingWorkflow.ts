import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  InputSourceConfig: {
    Type?: (string | "SOURCE" | "TARGET")
    InputSourceARN: StringProperty
    SchemaArn?: StringProperty
  }[]
  IdMappingTechniques: {
    RuleBasedProperties?: {
      AttributeMatchingModel: (string | "ONE_TO_ONE" | "MANY_TO_MANY")
      RuleDefinitionType?: (string | "SOURCE" | "TARGET")
      Rules?: {
        MatchingKeys: StringProperty[]
        RuleName: StringProperty
      }[]
      RecordMatchingModel: (string | "ONE_SOURCE_TO_ONE_TARGET" | "MANY_SOURCE_TO_ONE_TARGET")
    }
    ProviderProperties?: {
      IntermediateSourceConfiguration?: {
        IntermediateS3Path: StringProperty
      }
      ProviderServiceArn: StringProperty
      ProviderConfiguration?: Record<string, any>
    }
    IdMappingType?: (string | "PROVIDER" | "RULE_BASED")
    NormalizationVersion?: StringProperty
  }
  WorkflowName: StringProperty
  CreatedAt?: StringProperty
  OutputSourceConfig?: {
    KMSArn?: StringProperty
    OutputS3Path: StringProperty
  }[]
  IdMappingIncrementalRunConfig?: {
    IncrementalRunType: (string | "ON_DEMAND")
  }
  WorkflowArn?: StringProperty
  UpdatedAt?: StringProperty
  RoleArn: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSEntityResolutionIdMappingWorkflow = ({
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
      Type: 'AWS::EntityResolution::IdMappingWorkflow',
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