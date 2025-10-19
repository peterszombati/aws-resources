import {StringProperty} from "../StringProperty"


type Properties = {
  ScanName: StringProperty
  SecurityLevel: (string | "LEVEL_1" | "LEVEL_2")
  Schedule: any
  Targets: any
  Arn?: StringProperty
  Tags?: Record<string, any>
}

export const AWSInspectorV2CisScanConfiguration = ({
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
      Type: 'AWS::InspectorV2::CisScanConfiguration',
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