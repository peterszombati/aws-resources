import {StringProperty} from "../StringProperty"


type Properties = {
  WorkgroupName: StringProperty
  NamespaceName?: StringProperty
  BaseCapacity?: number
  MaxCapacity?: number
  EnhancedVpcRouting?: boolean
  ConfigParameters?: {
    ParameterKey?: StringProperty
    ParameterValue?: StringProperty
  }[]
  SecurityGroupIds?: StringProperty[]
  SubnetIds?: StringProperty[]
  PubliclyAccessible?: boolean
  Port?: number
  PricePerformanceTarget?: {
    Status?: (string | "ENABLED" | "DISABLED")
    Level?: number
  }
  SnapshotArn?: StringProperty
  SnapshotName?: StringProperty
  SnapshotOwnerAccount?: StringProperty
  RecoveryPointId?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  TrackName?: StringProperty
  Workgroup?: {
    WorkgroupId?: StringProperty
    WorkgroupArn?: StringProperty
    WorkgroupName?: StringProperty
    NamespaceName?: StringProperty
    BaseCapacity?: number
    MaxCapacity?: number
    EnhancedVpcRouting?: boolean
    ConfigParameters?: {
      ParameterKey?: StringProperty
      ParameterValue?: StringProperty
    }[]
    SecurityGroupIds?: StringProperty[]
    SubnetIds?: StringProperty[]
    Status?: (string | "CREATING" | "AVAILABLE" | "MODIFYING" | "DELETING")
    Endpoint?: {
      Address?: StringProperty
      Port?: number
      VpcEndpoints?: {
        VpcEndpointId?: StringProperty
        VpcId?: StringProperty
        NetworkInterfaces?: {
          NetworkInterfaceId?: StringProperty
          SubnetId?: StringProperty
          PrivateIpAddress?: StringProperty
          AvailabilityZone?: StringProperty
        }[]
      }[]
    }
    PubliclyAccessible?: boolean
    CreationDate?: StringProperty
    PricePerformanceTarget?: {
      Status?: (string | "ENABLED" | "DISABLED")
      Level?: number
    }
    TrackName?: StringProperty
  }
}

export const AWSRedshiftServerlessWorkgroup = ({
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
      Type: 'AWS::RedshiftServerless::Workgroup',
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