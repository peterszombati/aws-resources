import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  Id?: StringProperty
  Namespace: StringProperty
  Description: StringProperty
  ApplicationArn?: StringProperty
  ApplicationSourceConfig: {
    ExternalUrlConfig: {
      AccessUrl: StringProperty
      ApprovedOrigins?: StringProperty[]
    }
  }
  Permissions?: StringProperty[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  IsService?: boolean
  InitializationTimeout?: number
  ApplicationConfig?: {
    ContactHandling?: {
      Scope: (string | "CROSS_CONTACTS" | "PER_CONTACT")
    }
  }
  IframeConfig?: {
    Allow?: StringProperty[]
    Sandbox?: StringProperty[]
  }
}

export const AWSAppIntegrationsApplication = ({
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
      Type: 'AWS::AppIntegrations::Application',
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