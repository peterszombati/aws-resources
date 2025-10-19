import {StringProperty} from "../StringProperty"


type Properties = {
  AcceptLanguage?: (string | "en" | "jp" | "zh")
  Name: StringProperty
  DefinitionType: (string | "SSM_AUTOMATION")
  Definition: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Description?: StringProperty
  Id?: StringProperty
}

export const AWSServiceCatalogServiceAction = ({
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
      Type: 'AWS::ServiceCatalog::ServiceAction',
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