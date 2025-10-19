import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Format: StringProperty
  Activate?: boolean
  DetectorId?: StringProperty
  Name?: StringProperty
  Location: StringProperty
  ExpectedBucketOwner?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGuardDutyThreatIntelSet = ({
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
      Type: 'AWS::GuardDuty::ThreatIntelSet',
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