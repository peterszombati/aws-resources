import {StringProperty} from "../StringProperty"


type Properties = {
  RoleAttachedAt?: StringProperty
  LatestVersionArn?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  RoleArn?: StringProperty
  Name: StringProperty
  InitialVersion?: {
    LoggerDefinitionVersionArn?: StringProperty
    DeviceDefinitionVersionArn?: StringProperty
    FunctionDefinitionVersionArn?: StringProperty
    CoreDefinitionVersionArn?: StringProperty
    ResourceDefinitionVersionArn?: StringProperty
    ConnectorDefinitionVersionArn?: StringProperty
    SubscriptionDefinitionVersionArn?: StringProperty
  }
  Tags?: Record<string, any>
}

export const AWSGreengrassGroup = ({
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
      Type: 'AWS::Greengrass::Group',
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