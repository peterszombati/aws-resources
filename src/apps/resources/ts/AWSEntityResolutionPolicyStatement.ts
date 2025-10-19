import {StringProperty} from "../StringProperty"


type Properties = {
  Arn: StringProperty
  StatementId: StringProperty
  Effect?: (string | "Allow" | "Deny")
  Action?: StringProperty[]
  Principal?: StringProperty[]
  Condition?: StringProperty
}

export const AWSEntityResolutionPolicyStatement = ({
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
      Type: 'AWS::EntityResolution::PolicyStatement',
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