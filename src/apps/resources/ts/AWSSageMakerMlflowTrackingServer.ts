import {StringProperty} from "../StringProperty"


type Properties = {
  TrackingServerName: StringProperty
  TrackingServerArn?: StringProperty
  TrackingServerSize?: (string | "Small" | "Medium" | "Large")
  MlflowVersion?: StringProperty
  RoleArn: StringProperty
  ArtifactStoreUri: StringProperty
  AutomaticModelRegistration?: boolean
  WeeklyMaintenanceWindowStart?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSSageMakerMlflowTrackingServer = ({
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
      Type: 'AWS::SageMaker::MlflowTrackingServer',
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