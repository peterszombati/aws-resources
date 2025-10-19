import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  RoleArn: StringProperty
  SchemaS3Location?: {
    BucketName: StringProperty
    ObjectKey: StringProperty
  }
  DescribePayload?: StringProperty
  MaximumDuration?: StringProperty
  SnapshotS3Location?: {
    BucketName: StringProperty
    ObjectKey: StringProperty
  }
}

export const AWSSimSpaceWeaverSimulation = ({
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
      Type: 'AWS::SimSpaceWeaver::Simulation',
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