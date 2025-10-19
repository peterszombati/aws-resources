import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  BundleId?: StringProperty
  PrivateKey?: StringProperty
  Enabled?: boolean
  DefaultAuthenticationMethod?: StringProperty
  TokenKey?: StringProperty
  ApplicationId: StringProperty
  TeamId?: StringProperty
  Certificate?: StringProperty
  TokenKeyId?: StringProperty
}

export const AWSPinpointAPNSChannel = ({
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
      Type: 'AWS::Pinpoint::APNSChannel',
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