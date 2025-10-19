import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Fleet?: StringProperty
  Architecture: (string | "X86_64" | "ARM64" | "ARMHF")
  GreengrassGroupId: StringProperty
  Tags?: Record<string, any>
  Name?: StringProperty
}

export const AWSRoboMakerRobot = ({
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
      Type: 'AWS::RoboMaker::Robot',
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