import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  ByteMatchTuples?: {
    FieldToMatch: {
      Data?: StringProperty
      Type: StringProperty
    }
    PositionalConstraint: StringProperty
    TargetString?: StringProperty
    TargetStringBase64?: StringProperty
    TextTransformation: StringProperty
  }[]
  Name: StringProperty
}

export const AWSWAFByteMatchSet = ({
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
      Type: 'AWS::WAF::ByteMatchSet',
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