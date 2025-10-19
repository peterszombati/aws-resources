import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  GatewayArn?: StringProperty
  GatewayState?: (string | "CREATING" | "ACTIVE" | "UPDATING" | "ERROR" | "DELETING" | "DELETED")
  EgressCidrBlocks: StringProperty[]
  Networks: {
    Name: StringProperty
    CidrBlock: StringProperty
  }[]
}

export const AWSMediaConnectGateway = ({
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
      Type: 'AWS::MediaConnect::Gateway',
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