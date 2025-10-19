import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Content?: {
    BackgroundColor?: StringProperty
    BodyConfig?: {
      Alignment?: (string | "LEFT" | "CENTER" | "RIGHT")
      Body?: StringProperty
      TextColor?: StringProperty
    }
    HeaderConfig?: {
      Alignment?: (string | "LEFT" | "CENTER" | "RIGHT")
      Header?: StringProperty
      TextColor?: StringProperty
    }
    ImageUrl?: StringProperty
    PrimaryBtn?: {
      Android?: {
        ButtonAction?: (string | "LINK" | "DEEP_LINK" | "CLOSE")
        Link?: StringProperty
      }
      DefaultConfig?: {
        BackgroundColor?: StringProperty
        BorderRadius?: number
        ButtonAction?: (string | "LINK" | "DEEP_LINK" | "CLOSE")
        Link?: StringProperty
        Text?: StringProperty
        TextColor?: StringProperty
      }
      IOS?: {
        ButtonAction?: (string | "LINK" | "DEEP_LINK" | "CLOSE")
        Link?: StringProperty
      }
      Web?: {
        ButtonAction?: (string | "LINK" | "DEEP_LINK" | "CLOSE")
        Link?: StringProperty
      }
    }
    SecondaryBtn?: {
      Android?: {
        ButtonAction?: (string | "LINK" | "DEEP_LINK" | "CLOSE")
        Link?: StringProperty
      }
      DefaultConfig?: {
        BackgroundColor?: StringProperty
        BorderRadius?: number
        ButtonAction?: (string | "LINK" | "DEEP_LINK" | "CLOSE")
        Link?: StringProperty
        Text?: StringProperty
        TextColor?: StringProperty
      }
      IOS?: {
        ButtonAction?: (string | "LINK" | "DEEP_LINK" | "CLOSE")
        Link?: StringProperty
      }
      Web?: {
        ButtonAction?: (string | "LINK" | "DEEP_LINK" | "CLOSE")
        Link?: StringProperty
      }
    }
  }[]
  CustomConfig?: Record<string, any>
  Layout?: (string | "BOTTOM_BANNER" | "TOP_BANNER" | "OVERLAYS" | "MOBILE_FEED" | "MIDDLE_BANNER" | "CAROUSEL")
  Tags?: Record<string, any>
  TemplateDescription?: StringProperty
  TemplateName: StringProperty
}

export const AWSPinpointInAppTemplate = ({
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
      Type: 'AWS::Pinpoint::InAppTemplate',
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