import {StringProperty} from "../StringProperty"


type Properties = {
  ARN?: StringProperty
  EnableDefaultStandards?: boolean
  ControlFindingGenerator?: StringProperty
  AutoEnableControls?: boolean
  Tags?: Record<string, any>
  SubscribedAt?: StringProperty
}

export const AWSSecurityHubHub = ({
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
      Type: 'AWS::SecurityHub::Hub',
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