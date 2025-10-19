import {StringProperty} from "../StringProperty"


type Properties = {
  InternetGatewayBlockMode: (string | "block-bidirectional" | "block-ingress")
  AccountId?: StringProperty
  ExclusionsAllowed?: StringProperty
}

export const AWSEC2VPCBlockPublicAccessOptions = ({
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
      Type: 'AWS::EC2::VPCBlockPublicAccessOptions',
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