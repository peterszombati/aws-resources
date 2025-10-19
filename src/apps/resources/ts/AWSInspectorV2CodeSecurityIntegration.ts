import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Type?: (string | "GITLAB_SELF_MANAGED" | "GITHUB")
  CreateIntegrationDetails?: {
    gitlabSelfManaged: {
      instanceUrl: StringProperty
      accessToken: StringProperty
    }
  }
  UpdateIntegrationDetails?: {
    gitlabSelfManaged?: {
      authCode: StringProperty
    }
    github?: {
      code: StringProperty
      installationId: StringProperty
    }
  }
  Status?: (string | "PENDING" | "IN_PROGRESS" | "ACTIVE" | "INACTIVE" | "DISABLING")
  StatusReason?: StringProperty
  Arn?: StringProperty
  AuthorizationUrl?: StringProperty
  CreatedAt?: StringProperty
  LastUpdatedAt?: StringProperty
  Tags?: Record<string, any>
}

export const AWSInspectorV2CodeSecurityIntegration = ({
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
      Type: 'AWS::InspectorV2::CodeSecurityIntegration',
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