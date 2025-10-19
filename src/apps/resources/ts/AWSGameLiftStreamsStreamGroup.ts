import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  DefaultApplication?: {
    Id?: StringProperty
    Arn?: StringProperty
  }
  Description: StringProperty
  Id?: StringProperty
  StreamClass: StringProperty
  Tags?: Record<string, any>
  LocationConfigurations: {
    LocationName: StringProperty
    AlwaysOnCapacity?: number
    OnDemandCapacity?: number
  }[]
}

export const AWSGameLiftStreamsStreamGroup = ({
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
      Type: 'AWS::GameLiftStreams::StreamGroup',
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