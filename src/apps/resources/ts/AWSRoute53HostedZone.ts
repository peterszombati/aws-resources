import {StringProperty} from "../StringProperty"


type Properties = {
  HostedZoneTags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  VPCs?: {
    VPCRegion: StringProperty
    VPCId: StringProperty
  }[]
  HostedZoneConfig?: {
    Comment?: StringProperty
  }
  Id?: StringProperty
  NameServers?: StringProperty[]
  QueryLoggingConfig?: {
    CloudWatchLogsLogGroupArn: StringProperty
  }
  Name?: StringProperty
}

export const AWSRoute53HostedZone = ({
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
      Type: 'AWS::Route53::HostedZone',
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