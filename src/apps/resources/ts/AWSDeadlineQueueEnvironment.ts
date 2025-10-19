import {StringProperty} from "../StringProperty"


type Properties = {
  FarmId: StringProperty
  Name?: StringProperty
  Priority: number
  QueueEnvironmentId?: StringProperty
  QueueId: StringProperty
  Template: StringProperty
  TemplateType: (string | "JSON" | "YAML")
}

export const AWSDeadlineQueueEnvironment = ({
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
      Type: 'AWS::Deadline::QueueEnvironment',
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