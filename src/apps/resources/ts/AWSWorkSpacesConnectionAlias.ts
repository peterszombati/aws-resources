import {StringProperty} from "../StringProperty"


type Properties = {
  Associations?: {
    AssociationStatus?: (string | "NOT_ASSOCIATED" | "PENDING_ASSOCIATION" | "ASSOCIATED_WITH_OWNER_ACCOUNT" | "ASSOCIATED_WITH_SHARED_ACCOUNT" | "PENDING_DISASSOCIATION")
    AssociatedAccountId?: StringProperty
    ResourceId?: StringProperty
    ConnectionIdentifier?: StringProperty
  }[]
  AliasId?: StringProperty
  ConnectionString: StringProperty
  ConnectionAliasState?: (string | "CREATING" | "CREATED" | "DELETING")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSWorkSpacesConnectionAlias = ({
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
      Type: 'AWS::WorkSpaces::ConnectionAlias',
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