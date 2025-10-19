import {StringProperty} from "../StringProperty"


type Properties = {
  Owner: StringProperty
  Description?: StringProperty
  ProductName?: StringProperty
  SupportEmail?: StringProperty
  ProductType?: StringProperty
  ProvisioningArtifactNames?: StringProperty
  Name: StringProperty
  ReplaceProvisioningArtifacts?: boolean
  SupportDescription?: StringProperty
  Distributor?: StringProperty
  ProvisioningArtifactIds?: StringProperty
  AcceptLanguage?: StringProperty
  SupportUrl?: StringProperty
  Id?: StringProperty
  SourceConnection?: {
    ConnectionParameters: {
      CodeStar?: {
        ArtifactPath: StringProperty
        ConnectionArn: StringProperty
        Repository: StringProperty
        Branch: StringProperty
      }
    }
    Type: StringProperty
  }
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  ProvisioningArtifactParameters?: {
    Type?: StringProperty
    Description?: StringProperty
    Info: Record<string, any>
    DisableTemplateValidation?: boolean
    Name?: StringProperty
  }[]
}

export const AWSServiceCatalogCloudFormationProduct = ({
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
      Type: 'AWS::ServiceCatalog::CloudFormationProduct',
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