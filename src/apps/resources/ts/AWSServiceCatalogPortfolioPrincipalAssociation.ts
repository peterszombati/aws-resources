import {StringProperty} from "../StringProperty"


type Properties = {
  PrincipalARN?: StringProperty
  AcceptLanguage?: StringProperty
  PortfolioId?: StringProperty
  PrincipalType: StringProperty
}

export const AWSServiceCatalogPortfolioPrincipalAssociation = ({
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
      Type: 'AWS::ServiceCatalog::PortfolioPrincipalAssociation',
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