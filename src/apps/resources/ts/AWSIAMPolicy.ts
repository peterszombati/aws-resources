import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Groups?: StringProperty[]
  PolicyDocument: Record<string, any> | StringProperty
  PolicyName: StringProperty
  Roles?: StringProperty[]
  Users?: StringProperty[]
}

export const AWSIAMPolicy = ({
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
      Type: 'AWS::IAM::Policy',
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