import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ChannelIds?: StringProperty[]
  ClusterType?: (string | "ON_PREMISES" | "OUTPOSTS_RACK" | "OUTPOSTS_SERVER" | "EC2")
  Id?: StringProperty
  InstanceRoleArn?: StringProperty
  Name?: StringProperty
  NetworkSettings?: {
    DefaultRoute?: StringProperty
    InterfaceMappings?: {
      LogicalInterfaceName?: StringProperty
      NetworkId?: StringProperty
    }[]
  }
  State?: (string | "CREATING" | "CREATE_FAILED" | "ACTIVE" | "DELETING" | "DELETED")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMediaLiveCluster = ({
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
      Type: 'AWS::MediaLive::Cluster',
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