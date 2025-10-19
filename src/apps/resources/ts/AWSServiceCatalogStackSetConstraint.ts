import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Description: StringProperty
  StackInstanceControl: StringProperty
  AcceptLanguage?: StringProperty
  PortfolioId: StringProperty
  ProductId: StringProperty
  RegionList: StringProperty[]
  AdminRole: StringProperty
  AccountList: StringProperty[]
  ExecutionRole: StringProperty
}

export const AWSServiceCatalogStackSetConstraint = ({
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
      Type: 'AWS::ServiceCatalog::StackSetConstraint',
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