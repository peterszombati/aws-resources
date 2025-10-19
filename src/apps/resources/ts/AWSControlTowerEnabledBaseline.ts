import {StringProperty} from "../StringProperty"


type Properties = {
  BaselineIdentifier: StringProperty
  BaselineVersion: StringProperty
  EnabledBaselineIdentifier?: StringProperty
  TargetIdentifier: StringProperty
  Parameters?: {
    Key?: StringProperty
    Value?: any
  }[]
  Tags?: {
    Key?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSControlTowerEnabledBaseline = ({
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
      Type: 'AWS::ControlTower::EnabledBaseline',
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