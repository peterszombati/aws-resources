import {StringProperty} from "../StringProperty"


type Properties = {
  IpamArn?: StringProperty
  IpamRegion?: StringProperty
  IpamResourceDiscoveryAssociationId?: StringProperty
  IpamResourceDiscoveryId: StringProperty
  IpamId: StringProperty
  IpamResourceDiscoveryAssociationArn?: StringProperty
  IsDefault?: boolean
  OwnerId?: StringProperty
  State?: StringProperty
  ResourceDiscoveryStatus?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2IPAMResourceDiscoveryAssociation = ({
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
      Type: 'AWS::EC2::IPAMResourceDiscoveryAssociation',
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