import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AssociatedClusterIds?: StringProperty[]
  Id?: StringProperty
  IpPools: {
    Cidr?: StringProperty
  }[]
  Name: StringProperty
  Routes?: {
    Cidr?: StringProperty
    Gateway?: StringProperty
  }[]
  State?: (string | "CREATING" | "CREATE_FAILED" | "ACTIVE" | "DELETING" | "IDLE" | "IN_USE" | "UPDATING" | "DELETED" | "DELETE_FAILED")
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMediaLiveNetwork = ({
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
      Type: 'AWS::MediaLive::Network',
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