import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Name: StringProperty
  Domain?: StringProperty
  DomainList?: StringProperty[]
  CwLogEnabled?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  AppMonitorConfiguration?: {
    IdentityPoolId?: StringProperty
    ExcludedPages?: StringProperty[]
    IncludedPages?: StringProperty[]
    FavoritePages?: StringProperty[]
    SessionSampleRate?: number
    GuestRoleArn?: StringProperty
    AllowCookies?: boolean
    Telemetries?: (string | "errors" | "performance" | "http")[]
    EnableXRay?: boolean
    MetricDestinations?: {
      Destination: (string | "CloudWatch" | "Evidently")
      DestinationArn?: StringProperty
      IamRoleArn?: StringProperty
      MetricDefinitions?: {
        Name: StringProperty
        Namespace?: StringProperty
        ValueKey?: StringProperty
        UnitLabel?: StringProperty
        DimensionKeys?: Record<string, any>
        EventPattern?: StringProperty
      }[]
    }[]
  }
  CustomEvents?: {
    Status?: (string | "ENABLED" | "DISABLED")
  }
  ResourcePolicy?: {
    PolicyDocument: StringProperty
    PolicyRevisionId?: StringProperty
  }
  DeobfuscationConfiguration?: {
    JavaScriptSourceMaps?: {
      Status: (string | "ENABLED" | "DISABLED")
      S3Uri?: StringProperty
    }
  }
}

export const AWSRUMAppMonitor = ({
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
      Type: 'AWS::RUM::AppMonitor',
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