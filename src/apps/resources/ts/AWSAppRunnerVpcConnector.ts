import {StringProperty} from "../StringProperty"


type Properties = {
  VpcConnectorName?: StringProperty
  VpcConnectorArn?: StringProperty
  VpcConnectorRevision?: number
  Subnets: StringProperty[]
  SecurityGroups?: StringProperty[]
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSAppRunnerVpcConnector = ({
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
      Type: 'AWS::AppRunner::VpcConnector',
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