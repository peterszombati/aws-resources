import {StringProperty} from "../StringProperty"


type Properties = {
  LatestVersionArn?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Name: StringProperty
  InitialVersion?: {
    Loggers: {
      Space?: number
      Type: StringProperty
      Level: StringProperty
      Id: StringProperty
      Component: StringProperty
    }[]
  }
  Tags?: Record<string, any>
}

export const AWSGreengrassLoggerDefinition = ({
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
      Type: 'AWS::Greengrass::LoggerDefinition',
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