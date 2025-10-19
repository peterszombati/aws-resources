import {StringProperty} from "../StringProperty"


type Properties = {
  HealthCheckId?: StringProperty
  AliasTarget?: {
    DNSName: StringProperty
    HostedZoneId: StringProperty
    EvaluateTargetHealth?: boolean
  }
  Comment?: StringProperty
  HostedZoneName?: StringProperty
  ResourceRecords?: StringProperty[]
  HostedZoneId?: StringProperty
  SetIdentifier?: StringProperty
  TTL?: StringProperty
  Weight?: number
  Name: StringProperty
  Type: StringProperty
  CidrRoutingConfig?: {
    CollectionId: StringProperty
    LocationName: StringProperty
  }
  Failover?: StringProperty
  GeoProximityLocation?: {
    AWSRegion?: StringProperty
    LocalZoneGroup?: StringProperty
    Bias?: number
    Coordinates?: {
      Longitude: StringProperty
      Latitude: StringProperty
    }
  }
  Region?: StringProperty
  GeoLocation?: {
    ContinentCode?: StringProperty
    CountryCode?: StringProperty
    SubdivisionCode?: StringProperty
  }
  Id?: StringProperty
  MultiValueAnswer?: boolean
}

export const AWSRoute53RecordSet = ({
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
      Type: 'AWS::Route53::RecordSet',
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