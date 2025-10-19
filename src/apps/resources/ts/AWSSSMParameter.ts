import {StringProperty} from "../StringProperty"


type Properties = {
  Type: (string | "String" | "StringList")
  Value: StringProperty
  Description?: StringProperty
  Policies?: StringProperty
  AllowedPattern?: StringProperty
  Tier?: (string | "Standard" | "Advanced" | "Intelligent-Tiering")
  Tags?: Record<string, any>
  DataType?: (string | "text" | "aws:ec2:image")
  Name?: StringProperty
}

export const AWSSSMParameter = ({
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
      Type: 'AWS::SSM::Parameter',
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