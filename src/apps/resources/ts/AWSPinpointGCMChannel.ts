import {StringProperty} from "../StringProperty"


type Properties = {
  Enabled?: boolean
  ServiceJson?: StringProperty
  DefaultAuthenticationMethod?: StringProperty
  ApiKey?: StringProperty
  Id?: StringProperty
  ApplicationId: StringProperty
}

export const AWSPinpointGCMChannel = ({
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
      Type: 'AWS::Pinpoint::GCMChannel',
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