import {StringProperty} from "../StringProperty"


type Properties = {
  DiskName: StringProperty
  DiskArn?: StringProperty
  SupportCode?: StringProperty
  AvailabilityZone?: StringProperty
  Location?: {
    AvailabilityZone?: StringProperty
    RegionName?: StringProperty
  }
  ResourceType?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
  AddOns?: {
    AddOnType: StringProperty
    Status?: (string | "Enabling" | "Disabling" | "Enabled" | "Terminating" | "Terminated" | "Disabled" | "Failed")
    AutoSnapshotAddOnRequest?: {
      SnapshotTimeOfDay?: StringProperty
    }
  }[]
  State?: StringProperty
  AttachmentState?: StringProperty
  SizeInGb: number
  Iops?: number
  IsAttached?: boolean
  Path?: StringProperty
  AttachedTo?: StringProperty
}

export const AWSLightsailDisk = ({
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
      Type: 'AWS::Lightsail::Disk',
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