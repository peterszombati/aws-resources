import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  TypeVersionArn?: StringProperty
  PublicVersionNumber?: StringProperty
  PublisherId?: StringProperty
  PublicTypeArn?: StringProperty
  TypeName?: StringProperty
  LogDeliveryBucket?: StringProperty
  Type?: (string | "RESOURCE" | "MODULE" | "HOOK")
}

export const AWSCloudFormationPublicTypeVersion = ({
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
      Type: 'AWS::CloudFormation::PublicTypeVersion',
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