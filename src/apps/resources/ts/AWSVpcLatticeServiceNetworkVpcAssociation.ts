import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedAt?: StringProperty
  SecurityGroupIds?: StringProperty[]
  Id?: StringProperty
  ServiceNetworkArn?: StringProperty
  ServiceNetworkId?: StringProperty
  ServiceNetworkIdentifier?: StringProperty
  ServiceNetworkName?: StringProperty
  Status?: (string | "CREATE_IN_PROGRESS" | "ACTIVE" | "UPDATE_IN_PROGRESS" | "DELETE_IN_PROGRESS" | "CREATE_FAILED" | "DELETE_FAILED")
  VpcId?: StringProperty
  VpcIdentifier?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVpcLatticeServiceNetworkVpcAssociation = ({
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
      Type: 'AWS::VpcLattice::ServiceNetworkVpcAssociation',
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