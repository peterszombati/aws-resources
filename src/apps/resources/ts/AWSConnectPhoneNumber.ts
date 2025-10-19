import {StringProperty} from "../StringProperty"


type Properties = {
  TargetArn: StringProperty
  PhoneNumberArn?: StringProperty
  Description?: StringProperty
  Type?: StringProperty
  CountryCode?: StringProperty
  Prefix?: StringProperty
  Address?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  SourcePhoneNumberArn?: StringProperty
}

export const AWSConnectPhoneNumber = ({
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
      Type: 'AWS::Connect::PhoneNumber',
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