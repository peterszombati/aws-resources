import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  LoggerDefinitionVersionArn?: StringProperty
  DeviceDefinitionVersionArn?: StringProperty
  FunctionDefinitionVersionArn?: StringProperty
  CoreDefinitionVersionArn?: StringProperty
  ResourceDefinitionVersionArn?: StringProperty
  ConnectorDefinitionVersionArn?: StringProperty
  SubscriptionDefinitionVersionArn?: StringProperty
  GroupId: StringProperty
}

export const AWSGreengrassGroupVersion = ({
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
      Type: 'AWS::Greengrass::GroupVersion',
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