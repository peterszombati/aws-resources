import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AwsAccountId: StringProperty
  BaseThemeId: StringProperty
  Configuration: {
    DataColorPalette?: {
      Colors?: StringProperty[]
      MinMaxGradient?: StringProperty[]
      EmptyFillColor?: StringProperty
    }
    UIColorPalette?: {
      PrimaryForeground?: StringProperty
      PrimaryBackground?: StringProperty
      SecondaryForeground?: StringProperty
      SecondaryBackground?: StringProperty
      Accent?: StringProperty
      AccentForeground?: StringProperty
      Danger?: StringProperty
      DangerForeground?: StringProperty
      Warning?: StringProperty
      WarningForeground?: StringProperty
      Success?: StringProperty
      SuccessForeground?: StringProperty
      Dimension?: StringProperty
      DimensionForeground?: StringProperty
      Measure?: StringProperty
      MeasureForeground?: StringProperty
    }
    Sheet?: {
      Tile?: {
        Border?: {
          Show?: boolean
        }
      }
      TileLayout?: {
        Gutter?: {
          Show?: boolean
        }
        Margin?: {
          Show?: boolean
        }
      }
    }
    Typography?: {
      FontFamilies?: {
        FontFamily?: StringProperty
      }[]
    }
  }
  CreatedTime?: StringProperty
  LastUpdatedTime?: StringProperty
  Name: StringProperty
  Permissions?: {
    Principal: StringProperty
    Actions: StringProperty[]
  }[]
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  ThemeId: StringProperty
  Type?: (string | "QUICKSIGHT" | "CUSTOM" | "ALL")
  Version?: {
    VersionNumber?: number
    Arn?: StringProperty
    Description?: StringProperty
    BaseThemeId?: StringProperty
    CreatedTime?: StringProperty
    Configuration?: {
      DataColorPalette?: {
        Colors?: StringProperty[]
        MinMaxGradient?: StringProperty[]
        EmptyFillColor?: StringProperty
      }
      UIColorPalette?: {
        PrimaryForeground?: StringProperty
        PrimaryBackground?: StringProperty
        SecondaryForeground?: StringProperty
        SecondaryBackground?: StringProperty
        Accent?: StringProperty
        AccentForeground?: StringProperty
        Danger?: StringProperty
        DangerForeground?: StringProperty
        Warning?: StringProperty
        WarningForeground?: StringProperty
        Success?: StringProperty
        SuccessForeground?: StringProperty
        Dimension?: StringProperty
        DimensionForeground?: StringProperty
        Measure?: StringProperty
        MeasureForeground?: StringProperty
      }
      Sheet?: {
        Tile?: {
          Border?: {
            Show?: boolean
          }
        }
        TileLayout?: {
          Gutter?: {
            Show?: boolean
          }
          Margin?: {
            Show?: boolean
          }
        }
      }
      Typography?: {
        FontFamilies?: {
          FontFamily?: StringProperty
        }[]
      }
    }
    Errors?: {
      Type?: (string | "INTERNAL_FAILURE")
      Message?: StringProperty
    }[]
    Status?: (string | "CREATION_IN_PROGRESS" | "CREATION_SUCCESSFUL" | "CREATION_FAILED" | "UPDATE_IN_PROGRESS" | "UPDATE_SUCCESSFUL" | "UPDATE_FAILED" | "PENDING_UPDATE" | "DELETED")
  }
  VersionDescription?: StringProperty
}

export const AWSQuickSightTheme = ({
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
      Type: 'AWS::QuickSight::Theme',
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