import {StringProperty} from "../StringProperty"


type Properties = {
  AppId?: StringProperty
  Cta?: {
    Position?: (string | "top" | "bottom" | "top_and_bottom")
    Clear?: {
      Excluded?: boolean
      Children?: StringProperty
      Position?: any
    }
    Cancel?: {
      Excluded?: boolean
      Children?: StringProperty
      Position?: any
    }
    Submit?: {
      Excluded?: boolean
      Children?: StringProperty
      Position?: any
    }
  }
  DataType?: {
    DataSourceType: (string | "DataStore" | "Custom")
    DataTypeName: StringProperty
  }
  EnvironmentName?: StringProperty
  Fields?: Record<string, any>
  FormActionType?: (string | "create" | "update")
  Id?: StringProperty
  LabelDecorator?: (string | "required" | "optional" | "none")
  Name?: StringProperty
  SchemaVersion?: StringProperty
  SectionalElements?: Record<string, any>
  Style?: {
    HorizontalGap?: any
    VerticalGap?: any
    OuterPadding?: any
  }
  Tags?: Record<string, any>
}

export const AWSAmplifyUIBuilderForm = ({
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
      Type: 'AWS::AmplifyUIBuilder::Form',
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