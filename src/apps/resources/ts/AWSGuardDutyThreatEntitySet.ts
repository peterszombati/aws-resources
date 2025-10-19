import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Format: StringProperty
  Activate?: boolean
  Status?: (string | "INACTIVE" | "ACTIVATING" | "ACTIVE" | "DEACTIVATING" | "ERROR" | "DELETE_PENDING" | "DELETED")
  CreatedAt?: StringProperty
  UpdatedAt?: StringProperty
  ErrorDetails?: StringProperty
  DetectorId?: StringProperty
  Name?: StringProperty
  Location: StringProperty
  ExpectedBucketOwner?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGuardDutyThreatEntitySet = ({
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
      Type: 'AWS::GuardDuty::ThreatEntitySet',
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