import {StringProperty} from "../StringProperty"


type Properties = {
  IntegrationName: StringProperty
  IntegrationType: (string | "OPENSEARCH")
  ResourceConfig: {
    OpenSearchResourceConfig?: {
      KmsKeyArn?: StringProperty
      DataSourceRoleArn: StringProperty
      DashboardViewerPrincipals: StringProperty[]
      ApplicationARN?: StringProperty
      RetentionDays?: number
    }
  }
  IntegrationStatus?: (string | "PROVISIONING" | "ACTIVE" | "FAILED")
}

export const AWSLogsIntegration = ({
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
      Type: 'AWS::Logs::Integration',
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