import {StringProperty} from "../StringProperty"


type Properties = {
  IntegrationAssociationId?: StringProperty
  InstanceId: StringProperty
  IntegrationArn: StringProperty
  IntegrationType: (string | "LEX_BOT" | "LAMBDA_FUNCTION" | "APPLICATION")
}

export const AWSConnectIntegrationAssociation = ({
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
      Type: 'AWS::Connect::IntegrationAssociation',
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