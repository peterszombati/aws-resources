import {StringProperty} from "../StringProperty"


type Properties = {
  AutomationDocument: StringProperty
  AutomationParameters: Record<string, any>
  ResourceKey: StringProperty
  AssociationId?: StringProperty
  Tags?: Record<string, any>
}

export const AWSSSMQuickSetupLifecycleAutomation = ({
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
      Type: 'AWS::SSMQuickSetup::LifecycleAutomation',
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