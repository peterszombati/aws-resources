import {StringProperty} from "../StringProperty"


type Properties = {
  Status?: (string | "ACTIVE" | "PROCESSING" | "FAILED")
  LatestAvailableVersion?: StringProperty
  Version: StringProperty
  DriftStatus?: (string | "DRIFTED" | "IN_SYNC")
  Arn?: StringProperty
  Manifest: any
  LandingZoneIdentifier?: StringProperty
  Tags?: {
    Value?: StringProperty
    Key?: StringProperty
  }[]
}

export const AWSControlTowerLandingZone = ({
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
      Type: 'AWS::ControlTower::LandingZone',
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