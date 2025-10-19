import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Description?: StringProperty
  InstanceArn: StringProperty
  ApplicationArn?: StringProperty
  ApplicationProviderArn: StringProperty
  Status?: (string | "ENABLED" | "DISABLED")
  PortalOptions?: {
    Visibility?: (string | "ENABLED" | "DISABLED")
    SignInOptions?: {
      Origin: (string | "IDENTITY_CENTER" | "APPLICATION")
      ApplicationUrl?: StringProperty
    }
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSSOApplication = ({
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
      Type: 'AWS::SSO::Application',
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