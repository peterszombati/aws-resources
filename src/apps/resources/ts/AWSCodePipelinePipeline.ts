import {StringProperty} from "../StringProperty"


type Properties = {
  ArtifactStores?: {
    ArtifactStore: {
      Type: (string | "S3")
      EncryptionKey?: {
        Type: StringProperty
        Id: StringProperty
      }
      Location: StringProperty
    }
    Region: StringProperty
  }[]
  DisableInboundStageTransitions?: {
    StageName: StringProperty
    Reason: StringProperty
  }[]
  Stages: {
    Blockers?: {
      Name: StringProperty
      Type: (string | "Schedule")
    }[]
    Actions: {
      ActionTypeId: {
        Owner: StringProperty
        Category: (string | "Source" | "Build" | "Test" | "Deploy" | "Invoke" | "Approval" | "Compute")
        Version: StringProperty
        Provider: StringProperty
      }
      Configuration?: Record<string, any>
      InputArtifacts?: {
        Name: StringProperty
      }[]
      OutputArtifacts?: {
        Name: StringProperty
        Files?: StringProperty[]
      }[]
      Commands?: StringProperty[]
      OutputVariables?: StringProperty[]
      EnvironmentVariables?: {
        Name: StringProperty
        Value: StringProperty
        Type?: (string | "PLAINTEXT" | "SECRETS_MANAGER")
      }[]
      Region?: StringProperty
      Namespace?: StringProperty
      RoleArn?: StringProperty
      RunOrder?: number
      Name: StringProperty
      TimeoutInMinutes?: number
    }[]
    Name: StringProperty
    OnFailure?: {
      Result?: (string | "ROLLBACK" | "RETRY")
      RetryConfiguration?: {
        RetryMode?: (string | "ALL_ACTIONS" | "FAILED_ACTIONS")
      }
      Conditions?: {
        Result?: StringProperty
        Rules?: {
          RuleTypeId?: {
            Owner?: StringProperty
            Category?: StringProperty
            Version?: StringProperty
            Provider?: StringProperty
          }
          Configuration?: Record<string, any>
          Commands?: StringProperty[]
          InputArtifacts?: {
            Name: StringProperty
          }[]
          Region?: StringProperty
          RoleArn?: StringProperty
          Name?: StringProperty
        }[]
      }[]
    }
    OnSuccess?: {
      Conditions?: {
        Result?: StringProperty
        Rules?: {
          RuleTypeId?: {
            Owner?: StringProperty
            Category?: StringProperty
            Version?: StringProperty
            Provider?: StringProperty
          }
          Configuration?: Record<string, any>
          Commands?: StringProperty[]
          InputArtifacts?: {
            Name: StringProperty
          }[]
          Region?: StringProperty
          RoleArn?: StringProperty
          Name?: StringProperty
        }[]
      }[]
    }
    BeforeEntry?: {
      Conditions?: {
        Result?: StringProperty
        Rules?: {
          RuleTypeId?: {
            Owner?: StringProperty
            Category?: StringProperty
            Version?: StringProperty
            Provider?: StringProperty
          }
          Configuration?: Record<string, any>
          Commands?: StringProperty[]
          InputArtifacts?: {
            Name: StringProperty
          }[]
          Region?: StringProperty
          RoleArn?: StringProperty
          Name?: StringProperty
        }[]
      }[]
    }
  }[]
  ExecutionMode?: (string | "QUEUED" | "SUPERSEDED" | "PARALLEL")
  RestartExecutionOnUpdate?: boolean
  Triggers?: {
    GitConfiguration?: {
      Push?: {
        FilePaths?: {
          Includes?: StringProperty[]
          Excludes?: StringProperty[]
        }
        Branches?: {
          Includes?: StringProperty[]
          Excludes?: StringProperty[]
        }
        Tags?: {
          Includes?: StringProperty[]
          Excludes?: StringProperty[]
        }
      }[]
      SourceActionName: StringProperty
      PullRequest?: {
        FilePaths?: {
          Includes?: StringProperty[]
          Excludes?: StringProperty[]
        }
        Events?: StringProperty[]
        Branches?: {
          Includes?: StringProperty[]
          Excludes?: StringProperty[]
        }
      }[]
    }
    ProviderType: (string | "CodeStarSourceConnection")
  }[]
  RoleArn: StringProperty
  Name?: StringProperty
  Variables?: {
    DefaultValue?: StringProperty
    Description?: StringProperty
    Name: StringProperty
  }[]
  Version?: StringProperty
  ArtifactStore?: {
    Type: (string | "S3")
    EncryptionKey?: {
      Type: StringProperty
      Id: StringProperty
    }
    Location: StringProperty
  }
  PipelineType?: (string | "V1" | "V2")
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSCodePipelinePipeline = ({
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
      Type: 'AWS::CodePipeline::Pipeline',
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