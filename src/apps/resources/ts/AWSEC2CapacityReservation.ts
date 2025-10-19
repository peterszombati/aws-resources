import {StringProperty} from "../StringProperty"


type Properties = {
  Tenancy?: StringProperty
  EndDateType?: StringProperty
  TagSpecifications?: {
    ResourceType?: StringProperty
    Tags?: {
      Value: StringProperty
      Key: StringProperty
    }[]
  }[]
  AvailabilityZone?: StringProperty
  TotalInstanceCount?: number
  EndDate?: StringProperty
  EbsOptimized?: boolean
  OutPostArn?: StringProperty
  InstanceCount: number
  PlacementGroupArn?: StringProperty
  AvailableInstanceCount?: number
  InstancePlatform: StringProperty
  Id?: StringProperty
  InstanceType: StringProperty
  EphemeralStorage?: boolean
  InstanceMatchCriteria?: StringProperty
  UnusedReservationBillingOwnerId?: StringProperty
  AvailabilityZoneId?: StringProperty
  StartDate?: StringProperty
  CapacityReservationArn?: StringProperty
  CreateDate?: StringProperty
  State?: StringProperty
  OwnerId?: StringProperty
  DeliveryPreference?: StringProperty
  CapacityReservationFleetId?: StringProperty
  ReservationType?: StringProperty
  CapacityAllocationSet?: {
    AllocationType?: StringProperty
    Count?: number
  }[]
  CommitmentInfo?: {
    CommitmentEndDate?: StringProperty
    CommittedInstanceCount?: number
  }
}

export const AWSEC2CapacityReservation = ({
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
      Type: 'AWS::EC2::CapacityReservation',
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