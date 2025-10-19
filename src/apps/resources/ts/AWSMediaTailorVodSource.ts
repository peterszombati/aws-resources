import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  HttpPackageConfigurations: {
    Path: StringProperty
    SourceGroup: StringProperty
    Type: (string | "DASH" | "HLS")
  }[]
  SourceLocationName: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  VodSourceName: StringProperty
}

export const AWSMediaTailorVodSource = ({
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
      Type: 'AWS::MediaTailor::VodSource',
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