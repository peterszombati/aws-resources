import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  ContactPrePassDurationSeconds?: number
  ContactPostPassDurationSeconds?: number
  MinimumViableContactDurationSeconds: number
  StreamsKmsKey?: {
    KmsKeyArn?: StringProperty
    KmsAliasArn?: StringProperty
    KmsAliasName?: StringProperty
  }
  StreamsKmsRole?: StringProperty
  DataflowEdges: {
    Source?: StringProperty
    Destination?: StringProperty
  }[]
  TrackingConfigArn: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Id?: StringProperty
  Arn?: StringProperty
  Region?: StringProperty
}

export const AWSGroundStationMissionProfile = ({
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
      Type: 'AWS::GroundStation::MissionProfile',
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