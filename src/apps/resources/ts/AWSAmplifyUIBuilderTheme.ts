import {StringProperty} from "../StringProperty"

type Tags = Record<string, any>

type ThemeValue = {
  Value?: StringProperty
  Children?: ThemeValues[]
}

type ThemeValues = {
  Key?: StringProperty
  Value?: ThemeValue
}


type Properties = {
  AppId?: StringProperty
  CreatedAt?: StringProperty
  EnvironmentName?: StringProperty
  Id?: StringProperty
  ModifiedAt?: StringProperty
  Name?: StringProperty
  Overrides?: ThemeValues[]
  Tags?: Tags
  Values?: ThemeValues[]
}

export const AWSAmplifyUIBuilderTheme = ({
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
      Type: 'AWS::AmplifyUIBuilder::Theme',
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