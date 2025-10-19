import {StringProperty} from "../StringProperty"


type Properties = {
  IdNamespaceAssociationIdentifier?: StringProperty
  Arn?: StringProperty
  MembershipIdentifier: StringProperty
  MembershipArn?: StringProperty
  CollaborationIdentifier?: StringProperty
  CollaborationArn?: StringProperty
  InputReferenceConfig: {
    InputReferenceArn: StringProperty
    ManageResourcePolicies: boolean
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Name: StringProperty
  Description?: StringProperty
  IdMappingConfig?: {
    AllowUseAsDimensionColumn: boolean
  }
  InputReferenceProperties?: {
    IdNamespaceType?: (string | "SOURCE" | "TARGET")
    IdMappingWorkflowsSupported?: Record<string, any>[]
  }
}

export const AWSCleanRoomsIdNamespaceAssociation = ({
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
      Type: 'AWS::CleanRooms::IdNamespaceAssociation',
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