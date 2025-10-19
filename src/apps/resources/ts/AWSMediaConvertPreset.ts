import {StringProperty} from "../StringProperty"


type Properties = {
  Category?: StringProperty
  Description?: StringProperty
  SettingsJson: Record<string, any>
  Id?: StringProperty
  Arn?: StringProperty
  Tags?: Record<string, any>
  Name?: StringProperty
}

export const AWSMediaConvertPreset = ({
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
      Type: 'AWS::MediaConvert::Preset',
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