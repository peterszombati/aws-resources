import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Id?: StringProperty
  DataIntegrationArn?: StringProperty
  Name: StringProperty
  KmsKey: StringProperty
  ScheduleConfig?: {
    FirstExecutionFrom?: StringProperty
    Object?: StringProperty
    ScheduleExpression: StringProperty
  }
  SourceURI: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  FileConfiguration?: {
    Folders: StringProperty[]
    Filters?: Record<string, any>
  }
  ObjectConfiguration?: Record<string, any>
}

export const AWSAppIntegrationsDataIntegration = ({
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
      Type: 'AWS::AppIntegrations::DataIntegration',
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