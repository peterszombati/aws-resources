import {StringProperty} from "../StringProperty"


type Properties = {
  Application: StringProperty
  CurrentRevisionId?: StringProperty
  ApplicationVersion?: StringProperty
  Arn?: StringProperty
}

export const AWSRoboMakerRobotApplicationVersion = ({
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
      Type: 'AWS::RoboMaker::RobotApplicationVersion',
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