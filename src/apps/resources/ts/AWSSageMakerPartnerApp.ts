import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Type: (string | "lakera-guard" | "comet" | "deepchecks-llm-evaluation" | "fiddler")
  ExecutionRoleArn: StringProperty
  KmsKeyId?: StringProperty
  Tier: StringProperty
  EnableIamSessionBasedIdentity?: boolean
  ApplicationConfig?: {
    AdminUsers?: StringProperty[]
    Arguments?: Record<string, any>
  }
  AuthType: (string | "IAM")
  BaseUrl?: StringProperty
  MaintenanceConfig?: {
    MaintenanceWindowStart: StringProperty
  }
  ClientToken?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerPartnerApp = ({
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
      Type: 'AWS::SageMaker::PartnerApp',
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