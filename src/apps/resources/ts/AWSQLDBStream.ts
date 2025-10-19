import {StringProperty} from "../StringProperty"


type Properties = {
  LedgerName: StringProperty
  StreamName: StringProperty
  RoleArn: StringProperty
  InclusiveStartTime: StringProperty
  ExclusiveEndTime?: StringProperty
  KinesisConfiguration: {
    StreamArn?: StringProperty
    AggregationEnabled?: boolean
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Arn?: StringProperty
  Id?: StringProperty
}

export const AWSQLDBStream = ({
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
      Type: 'AWS::QLDB::Stream',
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