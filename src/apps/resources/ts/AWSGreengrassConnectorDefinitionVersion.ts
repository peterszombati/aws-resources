import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Connectors: {
    ConnectorArn: StringProperty
    Parameters?: Record<string, any>
    Id: StringProperty
  }[]
  ConnectorDefinitionId: StringProperty
}

export const AWSGreengrassConnectorDefinitionVersion = ({
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
      Type: 'AWS::Greengrass::ConnectorDefinitionVersion',
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