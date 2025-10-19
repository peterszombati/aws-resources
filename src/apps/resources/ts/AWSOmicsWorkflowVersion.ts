import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  WorkflowId: StringProperty
  VersionName: StringProperty
  CreationTime?: StringProperty
  DefinitionUri?: StringProperty
  Description?: StringProperty
  Engine?: (string | "WDL" | "NEXTFLOW" | "CWL")
  Main?: StringProperty
  ParameterTemplate?: Record<string, any>
  Status?: (string | "CREATING" | "ACTIVE" | "UPDATING" | "DELETED" | "FAILED" | "INACTIVE")
  Accelerators?: (string | "GPU")
  StorageType?: (string | "STATIC" | "DYNAMIC")
  StorageCapacity?: number
  Tags?: Record<string, any>
  Type?: (string | "PRIVATE" | "READY2RUN")
  Uuid?: StringProperty
  WorkflowBucketOwnerId?: StringProperty
  ParameterTemplatePath?: StringProperty
  DefinitionRepository?: {
    connectionArn?: StringProperty
    fullRepositoryId?: StringProperty
    sourceReference?: {
      type?: (string | "BRANCH" | "TAG" | "COMMIT")
      value?: StringProperty
    }
    excludeFilePatterns?: StringProperty[]
  }
  readmePath?: StringProperty
  readmeUri?: StringProperty
  readmeMarkdown?: StringProperty
  ContainerRegistryMap?: {
    RegistryMappings?: {
      UpstreamRegistryUrl?: StringProperty
      EcrRepositoryPrefix?: StringProperty
      UpstreamRepositoryPrefix?: StringProperty
      EcrAccountId?: StringProperty
    }[]
    ImageMappings?: {
      SourceImage?: StringProperty
      DestinationImage?: StringProperty
    }[]
  }
  ContainerRegistryMapUri?: StringProperty
}

export const AWSOmicsWorkflowVersion = ({
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
      Type: 'AWS::Omics::WorkflowVersion',
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