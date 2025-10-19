import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  HttpPackageConfigurations: {
    Path: StringProperty
    SourceGroup: StringProperty
    Type: (string | "DASH" | "HLS")
  }[]
  LiveSourceName: StringProperty
  SourceLocationName: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSMediaTailorLiveSource = ({
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
      Type: 'AWS::MediaTailor::LiveSource',
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