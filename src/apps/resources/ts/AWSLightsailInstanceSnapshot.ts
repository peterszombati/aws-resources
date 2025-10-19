import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceSnapshotName: StringProperty
  Arn?: StringProperty
  InstanceName: StringProperty
  ResourceType?: StringProperty
  State?: StringProperty
  FromInstanceName?: StringProperty
  FromInstanceArn?: StringProperty
  SizeInGb?: number
  IsFromAutoSnapshot?: boolean
  SupportCode?: StringProperty
  Location?: {
    AvailabilityZone?: StringProperty
    RegionName?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSLightsailInstanceSnapshot = ({
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
      Type: 'AWS::Lightsail::InstanceSnapshot',
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