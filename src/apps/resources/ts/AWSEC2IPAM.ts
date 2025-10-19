import {StringProperty} from "../StringProperty"


type Properties = {
  IpamId?: StringProperty
  Arn?: StringProperty
  DefaultResourceDiscoveryId?: StringProperty
  DefaultResourceDiscoveryAssociationId?: StringProperty
  ResourceDiscoveryAssociationCount?: number
  Description?: StringProperty
  PublicDefaultScopeId?: StringProperty
  PrivateDefaultScopeId?: StringProperty
  ScopeCount?: number
  OperatingRegions?: {
    RegionName: StringProperty
  }[]
  Tier?: (string | "free" | "advanced")
  EnablePrivateGua?: boolean
  MeteredAccount?: (string | "ipam-owner" | "resource-owner")
  DefaultResourceDiscoveryOrganizationalUnitExclusions?: {
    OrganizationsEntityPath: StringProperty
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2IPAM = ({
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
      Type: 'AWS::EC2::IPAM',
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