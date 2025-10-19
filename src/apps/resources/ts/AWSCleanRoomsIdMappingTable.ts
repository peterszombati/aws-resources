import {StringProperty} from "../StringProperty"


type Properties = {
  IdMappingTableIdentifier?: StringProperty
  Arn?: StringProperty
  InputReferenceConfig: {
    InputReferenceArn: StringProperty
    ManageResourcePolicies: boolean
  }
  MembershipIdentifier: StringProperty
  MembershipArn?: StringProperty
  CollaborationIdentifier?: StringProperty
  CollaborationArn?: StringProperty
  Description?: StringProperty
  Name: StringProperty
  InputReferenceProperties?: {
    IdMappingTableInputSource: {
      IdNamespaceAssociationId: StringProperty
      Type: (string | "SOURCE" | "TARGET")
    }[]
  }
  KmsKeyArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSCleanRoomsIdMappingTable = ({
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
      Type: 'AWS::CleanRooms::IdMappingTable',
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