import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreationTime?: StringProperty
  DefinitionUri?: StringProperty
  Description?: StringProperty
  Engine?: (string | "WDL" | "NEXTFLOW" | "CWL")
  Id?: StringProperty
  Main?: StringProperty
  Name?: StringProperty
  ParameterTemplate?: Record<string, any>
  Status?: (string | "CREATING" | "ACTIVE" | "UPDATING" | "DELETED" | "FAILED")
  Accelerators?: (string | "GPU")
  StorageCapacity?: number
  Tags?: Record<string, any>
  Type?: (string | "PRIVATE")
  StorageType?: (string | "STATIC" | "DYNAMIC")
  Uuid?: StringProperty
  WorkflowBucketOwnerId?: StringProperty
  DefinitionRepository?: {
    connectionArn?: StringProperty
    fullRepositoryId?: StringProperty
    sourceReference?: {
      type?: (string | "BRANCH" | "TAG" | "COMMIT")
      value?: StringProperty
    }
    excludeFilePatterns?: StringProperty[]
  }
  ParameterTemplatePath?: StringProperty
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

export const AWSOmicsWorkflow = ({
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
      Type: 'AWS::Omics::Workflow',
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