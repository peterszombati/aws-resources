import {StringProperty} from "../StringProperty"


type Properties = {
  DisplayName: StringProperty
  IdentityCenterApplicationArn?: StringProperty
  IdentityCenterInstanceArn: StringProperty
  MonitorId?: StringProperty
  RoleArn: StringProperty
  Subdomain: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  Url?: StringProperty
  Arn?: StringProperty
}

export const AWSDeadlineMonitor = ({
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
      Type: 'AWS::Deadline::Monitor',
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