import {StringProperty} from "../StringProperty"


type Properties = {
  EnvironmentName?: StringProperty
  KmsKeyId?: StringProperty
  VpcId: StringProperty
  ServiceAccessSubnetId: StringProperty
  VcfVersion: (string | "VCF-5.2.1")
  TermsAccepted: boolean
  LicenseInfo: {
    SolutionKey: StringProperty
    VsanKey: StringProperty
  }
  InitialVlans?: {
    VmkManagement: {
      Cidr: StringProperty
    }
    VmManagement: {
      Cidr: StringProperty
    }
    VMotion: {
      Cidr: StringProperty
    }
    VSan: {
      Cidr: StringProperty
    }
    VTep: {
      Cidr: StringProperty
    }
    EdgeVTep: {
      Cidr: StringProperty
    }
    NsxUpLink: {
      Cidr: StringProperty
    }
    Hcx: {
      Cidr: StringProperty
    }
    IsHcxPublic?: boolean
    HcxNetworkAclId?: StringProperty
    ExpansionVlan1: {
      Cidr: StringProperty
    }
    ExpansionVlan2: {
      Cidr: StringProperty
    }
  }
  Hosts?: {
    HostName: StringProperty
    KeyName: StringProperty
    InstanceType: (string | "i4i.metal")
    PlacementGroupId?: StringProperty
    DedicatedHostId?: StringProperty
  }[]
  ConnectivityInfo: {
    PrivateRouteServerPeerings: StringProperty[]
  }
  VcfHostnames: {
    VCenter: StringProperty
    Nsx: StringProperty
    NsxManager1: StringProperty
    NsxManager2: StringProperty
    NsxManager3: StringProperty
    NsxEdge1: StringProperty
    NsxEdge2: StringProperty
    SddcManager: StringProperty
    CloudBuilder: StringProperty
  }
  SiteId: StringProperty
  EnvironmentId?: StringProperty
  EnvironmentArn?: StringProperty
  EnvironmentState?: (string | "CREATING" | "CREATED" | "DELETING" | "DELETED" | "CREATE_FAILED")
  StateDetails?: StringProperty
  Checks?: {
    Type: (string | "KEY_REUSE" | "KEY_COVERAGE" | "REACHABILITY" | "VCF_VERSION" | "HOST_COUNT")
    Result: (string | "PASSED" | "FAILED" | "UNKNOWN")
    ImpairedSince?: StringProperty
  }[]
  Credentials?: {
    SecretArn?: StringProperty
  }[]
  ServiceAccessSecurityGroups?: {
    SecurityGroups?: StringProperty[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  CreatedAt?: StringProperty
  ModifiedAt?: StringProperty
}

export const AWSEVSEnvironment = ({
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
      Type: 'AWS::EVS::Environment',
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