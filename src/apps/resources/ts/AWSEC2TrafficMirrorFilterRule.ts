import {StringProperty} from "../StringProperty"


type Properties = {
  DestinationPortRange?: {
    FromPort: number
    ToPort: number
  }
  Description?: StringProperty
  SourcePortRange?: {
    FromPort: number
    ToPort: number
  }
  RuleAction: StringProperty
  SourceCidrBlock: StringProperty
  RuleNumber: number
  DestinationCidrBlock: StringProperty
  TrafficMirrorFilterRuleId?: StringProperty
  TrafficMirrorFilterId: StringProperty
  TrafficDirection: StringProperty
  Protocol?: number
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSEC2TrafficMirrorFilterRule = ({
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
      Type: 'AWS::EC2::TrafficMirrorFilterRule',
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