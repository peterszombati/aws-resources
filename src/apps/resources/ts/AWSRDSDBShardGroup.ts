import {StringProperty} from "../StringProperty"


type Properties = {
  DBShardGroupResourceId?: StringProperty
  DBShardGroupIdentifier?: StringProperty
  DBClusterIdentifier: StringProperty
  ComputeRedundancy?: number
  MaxACU: number
  MinACU?: number
  PubliclyAccessible?: boolean
  Endpoint?: StringProperty
  Tags?: {
    Key: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSRDSDBShardGroup = ({
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
      Type: 'AWS::RDS::DBShardGroup',
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