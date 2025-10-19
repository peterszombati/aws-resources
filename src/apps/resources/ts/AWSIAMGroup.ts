import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  GroupName?: StringProperty
  ManagedPolicyArns?: StringProperty[]
  Path?: StringProperty
  Policies?: {
    PolicyDocument: StringProperty | Record<string, any>
    PolicyName: StringProperty
  }[]
}

export const AWSIAMGroup = ({
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
      Type: 'AWS::IAM::Group',
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