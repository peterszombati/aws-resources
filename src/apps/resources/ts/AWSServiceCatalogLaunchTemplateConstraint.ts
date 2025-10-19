import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Description?: StringProperty
  AcceptLanguage?: StringProperty
  PortfolioId: StringProperty
  ProductId: StringProperty
  Rules: StringProperty
}

export const AWSServiceCatalogLaunchTemplateConstraint = ({
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
      Type: 'AWS::ServiceCatalog::LaunchTemplateConstraint',
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