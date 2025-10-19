import {StringProperty} from "../StringProperty"


type Properties = {
  DiskSnapshotName: StringProperty
  DiskSnapshotArn?: StringProperty
  DiskName: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  Location?: {
    AvailabilityZone?: StringProperty
    RegionName?: StringProperty
  }
  ResourceType?: (string | "DiskSnapshot")
  State?: (string | "pending" | "completed" | "error" | "unknown")
  Progress?: StringProperty
  FromDiskName?: StringProperty
  SizeInGb?: number
  IsFromAutoSnapshot?: boolean
  CreatedAt?: StringProperty
  SupportCode?: StringProperty
}

export const AWSLightsailDiskSnapshot = ({
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
      Type: 'AWS::Lightsail::DiskSnapshot',
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