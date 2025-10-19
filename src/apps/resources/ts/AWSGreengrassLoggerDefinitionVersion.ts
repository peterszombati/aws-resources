import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  LoggerDefinitionId: StringProperty
  Loggers: {
    Space?: number
    Type: StringProperty
    Level: StringProperty
    Id: StringProperty
    Component: StringProperty
  }[]
}

export const AWSGreengrassLoggerDefinitionVersion = ({
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
      Type: 'AWS::Greengrass::LoggerDefinitionVersion',
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