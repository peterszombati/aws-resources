import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Id?: StringProperty
  Name?: StringProperty
  SamlOptions?: {
    Metadata: StringProperty
    UserAttribute?: StringProperty
    GroupAttribute?: StringProperty
    OpenSearchServerlessEntityId?: StringProperty
    SessionTimeout?: number
  }
  IamIdentityCenterOptions?: {
    InstanceArn: StringProperty
    ApplicationArn?: StringProperty
    ApplicationName?: StringProperty
    ApplicationDescription?: StringProperty
    UserAttribute?: StringProperty
    GroupAttribute?: StringProperty
  }
  IamFederationOptions?: {
    GroupAttribute?: StringProperty
    UserAttribute?: StringProperty
  }
  Type?: (string | "saml" | "iamidentitycenter" | "iamfederation")
}

export const AWSOpenSearchServerlessSecurityConfig = ({
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
      Type: 'AWS::OpenSearchServerless::SecurityConfig',
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