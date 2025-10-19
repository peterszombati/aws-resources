import {StringProperty} from "../StringProperty"


type Properties = {
  LatestVersionArn?: StringProperty
  Id?: StringProperty
  Arn?: StringProperty
  Name: StringProperty
  InitialVersion?: {
    Connectors: {
      ConnectorArn: StringProperty
      Parameters?: Record<string, any>
      Id: StringProperty
    }[]
  }
  Tags?: Record<string, any>
}

export const AWSGreengrassConnectorDefinition = ({
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
      Type: 'AWS::Greengrass::ConnectorDefinition',
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