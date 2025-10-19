import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AuthMode: (string | "SSO" | "IAM")
  DefaultS3Location: StringProperty
  Description?: StringProperty
  EngineSecurityGroupId: StringProperty
  Name: StringProperty
  ServiceRole: StringProperty
  StudioId?: StringProperty
  SubnetIds: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Url?: StringProperty
  UserRole?: StringProperty
  VpcId: StringProperty
  WorkspaceSecurityGroupId: StringProperty
  IdpAuthUrl?: StringProperty
  IdpRelayStateParameterName?: StringProperty
  TrustedIdentityPropagationEnabled?: boolean
  IdcUserAssignment?: (string | "REQUIRED" | "OPTIONAL")
  IdcInstanceArn?: StringProperty
  EncryptionKeyArn?: StringProperty
}

export const AWSEMRStudio = ({
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
      Type: 'AWS::EMR::Studio',
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