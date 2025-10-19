import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ConfiguredTableAssociationIdentifier?: StringProperty
  ConfiguredTableIdentifier: StringProperty
  Description?: StringProperty
  MembershipIdentifier: StringProperty
  Name: StringProperty
  RoleArn: StringProperty
  ConfiguredTableAssociationAnalysisRules?: {
    Type: (string | "AGGREGATION" | "LIST" | "CUSTOM")
    Policy: {
      V1: any
    }
  }[]
}

export const AWSCleanRoomsConfiguredTableAssociation = ({
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
      Type: 'AWS::CleanRooms::ConfiguredTableAssociation',
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