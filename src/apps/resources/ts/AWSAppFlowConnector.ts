import {StringProperty} from "../StringProperty"


type Properties = {
  ConnectorLabel?: StringProperty
  ConnectorArn?: StringProperty
  ConnectorProvisioningType: StringProperty
  ConnectorProvisioningConfig: {
    Lambda?: {
      LambdaArn: StringProperty
    }
  }
  Description?: StringProperty
}

export const AWSAppFlowConnector = ({
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
      Type: 'AWS::AppFlow::Connector',
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