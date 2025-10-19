import {StringProperty} from "../StringProperty"


type Properties = {
  AcceptLanguage?: (string | "en" | "jp" | "zh")
  NotificationArns?: StringProperty[]
  PathId?: StringProperty
  PathName?: StringProperty
  ProductId?: StringProperty
  ProductName?: StringProperty
  ProvisionedProductName?: StringProperty
  ProvisioningArtifactId?: StringProperty
  ProvisioningArtifactName?: StringProperty
  ProvisioningParameters?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ProvisioningPreferences?: {
    StackSetAccounts?: StringProperty[]
    StackSetFailureToleranceCount?: number
    StackSetFailureTolerancePercentage?: number
    StackSetMaxConcurrencyCount?: number
    StackSetMaxConcurrencyPercentage?: number
    StackSetOperationType?: (string | "CREATE" | "UPDATE" | "DELETE")
    StackSetRegions?: StringProperty[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ProvisionedProductId?: StringProperty
  RecordId?: StringProperty
  CloudformationStackArn?: StringProperty
  Outputs?: Record<string, any>
}

export const AWSServiceCatalogCloudFormationProvisionedProduct = ({
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
      Type: 'AWS::ServiceCatalog::CloudFormationProvisionedProduct',
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