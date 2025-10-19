import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  ChannelGroupName: StringProperty
  CreatedAt?: StringProperty
  Description?: StringProperty
  EgressDomain?: StringProperty
  ModifiedAt?: StringProperty
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSMediaPackageV2ChannelGroup = ({
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
      Type: 'AWS::MediaPackageV2::ChannelGroup',
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