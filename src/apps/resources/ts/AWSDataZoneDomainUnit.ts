import {StringProperty} from "../StringProperty"


type Properties = {
  DomainIdentifier: StringProperty
  Description?: StringProperty
  Name: StringProperty
  ParentDomainUnitIdentifier: StringProperty
  CreatedAt?: StringProperty
  DomainId?: StringProperty
  Id?: StringProperty
  ParentDomainUnitId?: StringProperty
  Identifier?: StringProperty
  LastUpdatedAt?: StringProperty
}

export const AWSDataZoneDomainUnit = ({
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
      Type: 'AWS::DataZone::DomainUnit',
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