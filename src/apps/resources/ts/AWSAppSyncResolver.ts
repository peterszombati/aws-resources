import {StringProperty} from "../StringProperty"


type Properties = {
  ApiId: StringProperty
  CachingConfig?: {
    CachingKeys?: StringProperty[]
    Ttl: number
  }
  Code?: StringProperty
  CodeS3Location?: StringProperty
  DataSourceName?: StringProperty
  FieldName: StringProperty
  Kind?: StringProperty
  MaxBatchSize?: number
  PipelineConfig?: {
    Functions?: StringProperty[]
  }
  RequestMappingTemplate?: StringProperty
  RequestMappingTemplateS3Location?: StringProperty
  ResolverArn?: StringProperty
  ResponseMappingTemplate?: StringProperty
  ResponseMappingTemplateS3Location?: StringProperty
  Runtime?: {
    RuntimeVersion: StringProperty
    Name: StringProperty
  }
  SyncConfig?: {
    ConflictHandler?: StringProperty
    ConflictDetection: StringProperty
    LambdaConflictHandlerConfig?: {
      LambdaConflictHandlerArn?: StringProperty
    }
  }
  TypeName: StringProperty
  MetricsConfig?: (string | "ENABLED" | "DISABLED")
}

export const AWSAppSyncResolver = ({
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
      Type: 'AWS::AppSync::Resolver',
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