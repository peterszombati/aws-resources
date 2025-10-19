import {StringProperty} from "../StringProperty"


type Properties = {
  Category?: StringProperty
  Description?: StringProperty
  AccelerationSettings?: {
    Mode: StringProperty
  }
  Priority?: number
  StatusUpdateInterval?: StringProperty
  SettingsJson: Record<string, any>
  Id?: StringProperty
  Arn?: StringProperty
  Queue?: StringProperty
  HopDestinations?: {
    WaitMinutes?: number
    Queue?: StringProperty
    Priority?: number
  }[]
  Tags?: Record<string, any>
  Name?: StringProperty
}

export const AWSMediaConvertJobTemplate = ({
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
      Type: 'AWS::MediaConvert::JobTemplate',
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