import {StringProperty} from "../StringProperty"


type Properties = {
  SegmentId?: StringProperty
  Arn?: StringProperty
  SegmentGroups?: {
    Groups?: {
      Type?: StringProperty
      SourceType?: StringProperty
      Dimensions?: {
        Demographic?: {
          AppVersion?: {
            DimensionType?: StringProperty
            Values?: StringProperty[]
          }
          DeviceType?: {
            DimensionType?: StringProperty
            Values?: StringProperty[]
          }
          Platform?: {
            DimensionType?: StringProperty
            Values?: StringProperty[]
          }
          Channel?: {
            DimensionType?: StringProperty
            Values?: StringProperty[]
          }
          Model?: {
            DimensionType?: StringProperty
            Values?: StringProperty[]
          }
          Make?: {
            DimensionType?: StringProperty
            Values?: StringProperty[]
          }
        }
        Metrics?: Record<string, any>
        Attributes?: Record<string, any>
        Behavior?: {
          Recency?: {
            Duration: StringProperty
            RecencyType: StringProperty
          }
        }
        UserAttributes?: Record<string, any>
        Location?: {
          GPSPoint?: {
            RangeInKilometers: number
            Coordinates: {
              Latitude: number
              Longitude: number
            }
          }
          Country?: {
            DimensionType?: StringProperty
            Values?: StringProperty[]
          }
        }
      }[]
      SourceSegments?: {
        Version?: number
        Id: StringProperty
      }[]
    }[]
    Include?: StringProperty
  }
  Dimensions?: {
    Demographic?: {
      AppVersion?: {
        DimensionType?: StringProperty
        Values?: StringProperty[]
      }
      DeviceType?: {
        DimensionType?: StringProperty
        Values?: StringProperty[]
      }
      Platform?: {
        DimensionType?: StringProperty
        Values?: StringProperty[]
      }
      Channel?: {
        DimensionType?: StringProperty
        Values?: StringProperty[]
      }
      Model?: {
        DimensionType?: StringProperty
        Values?: StringProperty[]
      }
      Make?: {
        DimensionType?: StringProperty
        Values?: StringProperty[]
      }
    }
    Metrics?: Record<string, any>
    Attributes?: Record<string, any>
    Behavior?: {
      Recency?: {
        Duration: StringProperty
        RecencyType: StringProperty
      }
    }
    UserAttributes?: Record<string, any>
    Location?: {
      GPSPoint?: {
        RangeInKilometers: number
        Coordinates: {
          Latitude: number
          Longitude: number
        }
      }
      Country?: {
        DimensionType?: StringProperty
        Values?: StringProperty[]
      }
    }
  }
  ApplicationId: StringProperty
  Tags?: Record<string, any>
  Name: StringProperty
}

export const AWSPinpointSegment = ({
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
      Type: 'AWS::Pinpoint::Segment',
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