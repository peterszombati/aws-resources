import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CreatedAt?: StringProperty
  DnsEntry?: {
    DomainName?: StringProperty
    HostedZoneId?: StringProperty
  }
  Id?: StringProperty
  ServiceNetworkArn?: StringProperty
  ServiceNetworkId?: StringProperty
  ServiceNetworkIdentifier?: StringProperty
  ServiceNetworkName?: StringProperty
  ServiceArn?: StringProperty
  ServiceId?: StringProperty
  ServiceIdentifier?: StringProperty
  ServiceName?: StringProperty
  Status?: (string | "CREATE_IN_PROGRESS" | "ACTIVE" | "DELETE_IN_PROGRESS" | "CREATE_FAILED" | "DELETE_FAILED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVpcLatticeServiceNetworkServiceAssociation = ({
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
      Type: 'AWS::VpcLattice::ServiceNetworkServiceAssociation',
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