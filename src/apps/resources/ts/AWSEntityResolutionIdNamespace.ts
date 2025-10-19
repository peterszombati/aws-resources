import {StringProperty} from "../StringProperty"


type Properties = {
  IdNamespaceName: StringProperty
  Description?: StringProperty
  InputSourceConfig?: {
    InputSourceARN: StringProperty
    SchemaName?: StringProperty
  }[]
  IdMappingWorkflowProperties?: {
    IdMappingType: (string | "PROVIDER" | "RULE_BASED")
    RuleBasedProperties?: {
      Rules?: {
        RuleName: StringProperty
        MatchingKeys: StringProperty[]
      }[]
      RuleDefinitionTypes?: (string | "SOURCE" | "TARGET")[]
      AttributeMatchingModel?: (string | "ONE_TO_ONE" | "MANY_TO_MANY")
      RecordMatchingModels?: (string | "ONE_SOURCE_TO_ONE_TARGET" | "MANY_SOURCE_TO_ONE_TARGET")[]
    }
    ProviderProperties?: {
      ProviderServiceArn: StringProperty
      ProviderConfiguration?: Record<string, any>
    }
  }[]
  Type: (string | "SOURCE" | "TARGET")
  RoleArn?: StringProperty
  IdNamespaceArn?: StringProperty
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEntityResolutionIdNamespace = ({
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
      Type: 'AWS::EntityResolution::IdNamespace',
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