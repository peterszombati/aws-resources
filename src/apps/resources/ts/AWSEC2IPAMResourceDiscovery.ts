import {StringProperty} from "../StringProperty"


type Properties = {
  IpamResourceDiscoveryId?: StringProperty
  OwnerId?: StringProperty
  OperatingRegions?: {
    RegionName: StringProperty
  }[]
  IpamResourceDiscoveryRegion?: StringProperty
  Description?: StringProperty
  OrganizationalUnitExclusions?: {
    OrganizationsEntityPath: StringProperty
  }[]
  IsDefault?: boolean
  IpamResourceDiscoveryArn?: StringProperty
  State?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2IPAMResourceDiscovery = ({
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
      Type: 'AWS::EC2::IPAMResourceDiscovery',
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