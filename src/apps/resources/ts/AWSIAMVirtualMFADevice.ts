import {StringProperty} from "../StringProperty"


type Properties = {
  VirtualMfaDeviceName?: StringProperty
  Path?: StringProperty
  SerialNumber?: StringProperty
  Users: StringProperty[]
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSIAMVirtualMFADevice = ({
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
      Type: 'AWS::IAM::VirtualMFADevice',
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