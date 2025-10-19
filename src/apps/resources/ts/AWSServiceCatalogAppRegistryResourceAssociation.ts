import {StringProperty} from "../StringProperty"


type Properties = {
  Application: StringProperty
  Resource: StringProperty
  ResourceType: (string | "CFN_STACK")
  ApplicationArn?: StringProperty
  ResourceArn?: StringProperty
}

export const AWSServiceCatalogAppRegistryResourceAssociation = ({
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
      Type: 'AWS::ServiceCatalogAppRegistry::ResourceAssociation',
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