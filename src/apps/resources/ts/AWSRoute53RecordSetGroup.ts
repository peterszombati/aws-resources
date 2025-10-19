import {StringProperty} from "../StringProperty"


type Properties = {
  Comment?: StringProperty
  Id?: StringProperty
  HostedZoneName?: StringProperty
  RecordSets?: {
    HealthCheckId?: StringProperty
    AliasTarget?: {
      DNSName: StringProperty
      HostedZoneId: StringProperty
      EvaluateTargetHealth?: boolean
    }
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
    MultiValueAnswer?: boolean
  }[]
  HostedZoneId?: StringProperty
}

export const AWSRoute53RecordSetGroup = ({
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
      Type: 'AWS::Route53::RecordSetGroup',
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