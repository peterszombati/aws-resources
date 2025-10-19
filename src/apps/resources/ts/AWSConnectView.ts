import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  ViewArn?: StringProperty
  ViewId?: StringProperty
  Name: StringProperty
  Description?: StringProperty
  Template: Record<string, any>
  Actions: StringProperty[]
  ViewContentSha256?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSConnectView = ({
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
      Type: 'AWS::Connect::View',
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