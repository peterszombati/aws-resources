import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ClientVpnEndpointId: StringProperty
  Description?: StringProperty
  AccessGroupId?: StringProperty
  TargetNetworkCidr: StringProperty
  AuthorizeAllGroups?: boolean
}

export const AWSEC2ClientVpnAuthorizationRule = ({
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
      Type: 'AWS::EC2::ClientVpnAuthorizationRule',
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