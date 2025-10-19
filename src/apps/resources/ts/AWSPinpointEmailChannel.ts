import {StringProperty} from "../StringProperty"


type Properties = {
  ConfigurationSet?: StringProperty
  FromAddress: StringProperty
  OrchestrationSendingRoleArn?: StringProperty
  Enabled?: boolean
  Id?: StringProperty
  ApplicationId: StringProperty
  Identity: StringProperty
  RoleArn?: StringProperty
}

export const AWSPinpointEmailChannel = ({
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
      Type: 'AWS::Pinpoint::EmailChannel',
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