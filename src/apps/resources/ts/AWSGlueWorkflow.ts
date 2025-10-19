import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Id?: StringProperty
  Tags?: Record<string, any>
  DefaultRunProperties?: Record<string, any>
  Name?: StringProperty
  MaxConcurrentRuns?: number
}

export const AWSGlueWorkflow = ({
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
      Type: 'AWS::Glue::Workflow',
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