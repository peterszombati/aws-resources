import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  Attributes: Record<string, any>
  Tags?: Record<string, any>
}

export const AWSServiceCatalogAppRegistryAttributeGroup = ({
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
      Type: 'AWS::ServiceCatalogAppRegistry::AttributeGroup',
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