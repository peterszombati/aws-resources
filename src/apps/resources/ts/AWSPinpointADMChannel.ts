import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ClientSecret: StringProperty
  Enabled?: boolean
  ClientId: StringProperty
  ApplicationId: StringProperty
}

export const AWSPinpointADMChannel = ({
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
      Type: 'AWS::Pinpoint::ADMChannel',
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