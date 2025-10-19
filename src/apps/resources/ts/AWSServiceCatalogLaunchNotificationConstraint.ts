import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Description?: StringProperty
  NotificationArns: StringProperty[]
  AcceptLanguage?: StringProperty
  PortfolioId: StringProperty
  ProductId: StringProperty
}

export const AWSServiceCatalogLaunchNotificationConstraint = ({
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
      Type: 'AWS::ServiceCatalog::LaunchNotificationConstraint',
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