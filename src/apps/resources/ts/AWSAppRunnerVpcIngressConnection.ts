import {StringProperty} from "../StringProperty"


type Properties = {
  VpcIngressConnectionArn?: StringProperty
  VpcIngressConnectionName?: StringProperty
  ServiceArn: StringProperty
  Status?: (string | "AVAILABLE" | "PENDING_CREATION" | "PENDING_UPDATE" | "PENDING_DELETION" | "FAILED_CREATION" | "FAILED_UPDATE" | "FAILED_DELETION" | "DELETED")
  DomainName?: StringProperty
  IngressVpcConfiguration: {
    VpcId: StringProperty
    VpcEndpointId: StringProperty
  }
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSAppRunnerVpcIngressConnection = ({
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
      Type: 'AWS::AppRunner::VpcIngressConnection',
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