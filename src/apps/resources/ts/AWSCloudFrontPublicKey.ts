import {StringProperty} from "../StringProperty"


type Properties = {
  CreatedTime?: StringProperty
  Id?: StringProperty
  PublicKeyConfig: {
    CallerReference: StringProperty
    Comment?: StringProperty
    EncodedKey: StringProperty
    Name: StringProperty
  }
}

export const AWSCloudFrontPublicKey = ({
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
      Type: 'AWS::CloudFront::PublicKey',
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