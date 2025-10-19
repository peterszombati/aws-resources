import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  Sources?: {
    S3Bucket: StringProperty
    S3Key: StringProperty
    Architecture: (string | "X86_64" | "ARM64" | "ARMHF")
  }[]
  Environment?: StringProperty
  RobotSoftwareSuite: {
    Name: (string | "ROS" | "ROS2" | "General")
    Version?: (string | "Kinetic" | "Melodic" | "Dashing")
  }
  CurrentRevisionId?: StringProperty
  Arn?: StringProperty
  Tags?: Record<string, any>
}

export const AWSRoboMakerRobotApplication = ({
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
      Type: 'AWS::RoboMaker::RobotApplication',
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