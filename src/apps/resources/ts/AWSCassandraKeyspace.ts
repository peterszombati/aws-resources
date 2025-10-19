import {StringProperty} from "../StringProperty"


type Properties = {
  KeyspaceName?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ReplicationSpecification?: {
    ReplicationStrategy?: (string | "SINGLE_REGION" | "MULTI_REGION")
    RegionList?: (string | "af-south-1" | "ap-northeast-1" | "ap-northeast-2" | "ap-south-1" | "ap-southeast-1" | "ap-southeast-2" | "ca-central-1" | "eu-central-1" | "eu-north-1" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "sa-east-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2")[]
  }
  ClientSideTimestampsEnabled?: boolean
}

export const AWSCassandraKeyspace = ({
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
      Type: 'AWS::Cassandra::Keyspace',
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