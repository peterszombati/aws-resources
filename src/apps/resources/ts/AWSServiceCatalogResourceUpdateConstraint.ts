import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Description?: StringProperty
  AcceptLanguage?: StringProperty
  TagUpdateOnProvisionedProduct: StringProperty
  PortfolioId: StringProperty
  ProductId: StringProperty
}

export const AWSServiceCatalogResourceUpdateConstraint = ({
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
      Type: 'AWS::ServiceCatalog::ResourceUpdateConstraint',
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