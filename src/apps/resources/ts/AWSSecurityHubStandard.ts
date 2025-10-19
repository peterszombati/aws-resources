import {StringProperty} from "../StringProperty"


type Properties = {
  StandardsSubscriptionArn?: StringProperty
  StandardsArn: StringProperty
  DisabledStandardsControls?: {
    StandardsControlArn: StringProperty
    Reason?: StringProperty
  }[]
}

export const AWSSecurityHubStandard = ({
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
      Type: 'AWS::SecurityHub::Standard',
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