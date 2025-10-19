import {StringProperty} from "../StringProperty"


type Properties = {
  ConnectionArn?: StringProperty
  ConnectionName: StringProperty
  ConnectionStatus?: StringProperty
  OwnerAccountId?: StringProperty
  ProviderType?: StringProperty
  HostArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCodeStarConnectionsConnection = ({
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
      Type: 'AWS::CodeStarConnections::Connection',
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