import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name?: StringProperty
  CurrentRevisionId?: StringProperty
  RenderingEngine?: {
    Name: (string | "OGRE")
    Version: StringProperty
  }
  RobotSoftwareSuite: {
    Name: (string | "ROS" | "ROS2" | "General")
    Version?: (string | "Kinetic" | "Melodic" | "Dashing" | "Foxy")
  }
  SimulationSoftwareSuite: {
    Name: (string | "Gazebo" | "RosbagPlay" | "SimulationRuntime")
    Version?: (string | "7" | "9" | "11" | "Kinetic" | "Melodic" | "Dashing" | "Foxy")
  }
  Sources?: {
    S3Bucket: StringProperty
    S3Key: StringProperty
    Architecture: (string | "X86_64" | "ARM64" | "ARMHF")
  }[]
  Environment?: StringProperty
  Tags?: Record<string, any>
}

export const AWSRoboMakerSimulationApplication = ({
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
      Type: 'AWS::RoboMaker::SimulationApplication',
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