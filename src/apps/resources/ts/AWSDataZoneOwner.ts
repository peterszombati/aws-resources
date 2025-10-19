import {StringProperty} from "../StringProperty"


type Properties = {
  DomainIdentifier: StringProperty
  EntityIdentifier: StringProperty
  EntityType: (string | "DOMAIN_UNIT")
  Owner: Record<string, any>
  OwnerType?: (string | "USER" | "GROUP")
  OwnerIdentifier?: StringProperty
}

export const AWSDataZoneOwner = ({
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
      Type: 'AWS::DataZone::Owner',
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