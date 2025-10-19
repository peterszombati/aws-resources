import {StringProperty} from "../StringProperty"


type Properties = {
  MrapName: StringProperty
  Policy: Record<string, any>
  PolicyStatus?: {
    IsPublic: (string | "true" | "false")
  }
}

export const AWSS3MultiRegionAccessPointPolicy = ({
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
      Type: 'AWS::S3::MultiRegionAccessPointPolicy',
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