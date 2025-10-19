import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Channels?: StringProperty[]
  ClusterId?: StringProperty
  Id?: StringProperty
  Name?: StringProperty
  Nodes?: StringProperty[]
  State?: (string | "UNASSIGNED" | "ASSIGNING" | "ASSIGNED" | "DELETING" | "DELETED" | "UNASSIGNING")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMediaLiveChannelPlacementGroup = ({
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
      Type: 'AWS::MediaLive::ChannelPlacementGroup',
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