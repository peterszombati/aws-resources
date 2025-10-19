import {StringProperty} from "../StringProperty"


type Properties = {
  Strategy?: StringProperty
  GroupName?: StringProperty
  SpreadLevel?: StringProperty
  PartitionCount?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2PlacementGroup = ({
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
      Type: 'AWS::EC2::PlacementGroup',
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