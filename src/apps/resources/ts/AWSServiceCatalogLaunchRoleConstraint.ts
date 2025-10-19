import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  LocalRoleName?: StringProperty
  AcceptLanguage?: StringProperty
  PortfolioId: StringProperty
  ProductId: StringProperty
  Id?: StringProperty
  RoleArn?: StringProperty
}

export const AWSServiceCatalogLaunchRoleConstraint = ({
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
      Type: 'AWS::ServiceCatalog::LaunchRoleConstraint',
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