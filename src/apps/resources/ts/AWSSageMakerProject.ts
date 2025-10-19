import {StringProperty} from "../StringProperty"


type Properties = {
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ProjectArn?: StringProperty
  ProjectId?: StringProperty
  ProjectName: StringProperty
  ProjectDescription?: StringProperty
  CreationTime?: StringProperty
  ServiceCatalogProvisioningDetails?: {
    ProductId: StringProperty
    ProvisioningArtifactId?: StringProperty
    PathId?: StringProperty
    ProvisioningParameters?: {
      Key: StringProperty
      Value: StringProperty
    }[]
  }
  ServiceCatalogProvisionedProductDetails?: {
    ProvisionedProductId?: StringProperty
    ProvisionedProductStatusMessage?: StringProperty
  }
  TemplateProviderDetails?: {
    CfnTemplateProviderDetail?: {
      Parameters?: {
        Key: StringProperty
        Value: StringProperty
      }[]
      RoleARN?: StringProperty
      TemplateName: StringProperty
      TemplateURL: StringProperty
    }
  }[]
  ProjectStatus?: (string | "Pending" | "CreateInProgress" | "CreateCompleted" | "CreateFailed" | "DeleteInProgress" | "DeleteFailed" | "DeleteCompleted")
}

export const AWSSageMakerProject = ({
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
      Type: 'AWS::SageMaker::Project',
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