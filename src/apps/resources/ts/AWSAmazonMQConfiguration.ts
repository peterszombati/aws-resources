import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  AuthenticationStrategy?: StringProperty
  EngineType: StringProperty
  EngineVersion?: StringProperty
  Data?: StringProperty
  Description?: StringProperty
  Id?: StringProperty
  Name: StringProperty
  Revision?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
}

export const AWSAmazonMQConfiguration = ({
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
      Type: 'AWS::AmazonMQ::Configuration',
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