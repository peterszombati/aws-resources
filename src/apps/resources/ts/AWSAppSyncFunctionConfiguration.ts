import {StringProperty} from "../StringProperty"


type Properties = {
  FunctionId?: StringProperty
  FunctionArn?: StringProperty
  ApiId: StringProperty
  Code?: StringProperty
  CodeS3Location?: StringProperty
  DataSourceName: StringProperty
  Description?: StringProperty
  FunctionVersion?: StringProperty
  MaxBatchSize?: number
  Name: StringProperty
  RequestMappingTemplate?: StringProperty
  RequestMappingTemplateS3Location?: StringProperty
  ResponseMappingTemplate?: StringProperty
  ResponseMappingTemplateS3Location?: StringProperty
  Runtime?: {
    Name: StringProperty
    RuntimeVersion: StringProperty
  }
  SyncConfig?: {
    ConflictDetection: StringProperty
    ConflictHandler?: StringProperty
    LambdaConflictHandlerConfig?: {
      LambdaConflictHandlerArn?: StringProperty
    }
  }
}

export const AWSAppSyncFunctionConfiguration = ({
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
      Type: 'AWS::AppSync::FunctionConfiguration',
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