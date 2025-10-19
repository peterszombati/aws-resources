import {StringProperty} from "../StringProperty"


type Properties = {
  AllocationStrategy?: StringProperty
  TagSpecifications?: {
    ResourceType?: StringProperty
    Tags?: {
      Value: StringProperty
      Key: StringProperty
    }[]
  }[]
  InstanceTypeSpecifications?: {
    InstanceType?: StringProperty
    InstancePlatform?: StringProperty
    Weight?: number
    AvailabilityZone?: StringProperty
    AvailabilityZoneId?: StringProperty
    EbsOptimized?: boolean
    Priority?: number
  }[]
  TotalTargetCapacity?: number
  EndDate?: StringProperty
  InstanceMatchCriteria?: (string | "open")
  CapacityReservationFleetId?: StringProperty
  Tenancy?: (string | "default")
  RemoveEndDate?: boolean
  NoRemoveEndDate?: boolean
}

export const AWSEC2CapacityReservationFleet = ({
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
      Type: 'AWS::EC2::CapacityReservationFleet',
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