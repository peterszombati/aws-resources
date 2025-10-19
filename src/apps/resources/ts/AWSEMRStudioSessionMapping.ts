import {StringProperty} from "../StringProperty"


type Properties = {
  IdentityName: StringProperty
  IdentityType: (string | "USER" | "GROUP")
  SessionPolicyArn: StringProperty
  StudioId: StringProperty
}

export const AWSEMRStudioSessionMapping = ({
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
      Type: 'AWS::EMR::StudioSessionMapping',
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