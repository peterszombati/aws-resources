import {StringProperty} from "../StringProperty"


type Properties = {
  Application: StringProperty
  AttributeGroup: StringProperty
  ApplicationArn?: StringProperty
  AttributeGroupArn?: StringProperty
}

export const AWSServiceCatalogAppRegistryAttributeGroupAssociation = ({
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
      Type: 'AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation',
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