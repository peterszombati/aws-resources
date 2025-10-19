import {StringProperty} from "../StringProperty"


type Properties = {
  GroupId: StringProperty
  VpcId: StringProperty
  VpcOwnerId?: StringProperty
  State?: (string | "associating" | "associated" | "association-failed" | "disassociating" | "disassociated" | "disassociation-failed")
  StateReason?: StringProperty
}

export const AWSEC2SecurityGroupVpcAssociation = ({
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
      Type: 'AWS::EC2::SecurityGroupVpcAssociation',
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