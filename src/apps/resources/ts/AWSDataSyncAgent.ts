import {StringProperty} from "../StringProperty"


type Properties = {
  AgentName?: StringProperty
  ActivationKey?: StringProperty
  SecurityGroupArns?: StringProperty[]
  SubnetArns?: StringProperty[]
  VpcEndpointId?: StringProperty
  EndpointType?: (string | "FIPS" | "PUBLIC" | "PRIVATE_LINK")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AgentArn?: StringProperty
}

export const AWSDataSyncAgent = ({
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
      Type: 'AWS::DataSync::Agent',
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