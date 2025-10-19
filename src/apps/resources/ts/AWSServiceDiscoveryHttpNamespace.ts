import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Description?: StringProperty
  Arn?: StringProperty
  Tags?: {
    Value: StringProperty
    Key: StringProperty
  }[]
  Name: StringProperty
}

export const AWSServiceDiscoveryHttpNamespace = ({
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
      Type: 'AWS::ServiceDiscovery::HttpNamespace',
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