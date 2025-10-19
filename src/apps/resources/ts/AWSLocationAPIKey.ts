import {StringProperty} from "../StringProperty"


type Properties = {
  CreateTime?: StringProperty
  Description?: StringProperty
  ExpireTime?: StringProperty
  ForceUpdate?: boolean
  KeyArn?: StringProperty
  KeyName: StringProperty
  NoExpiry?: boolean
  Restrictions: {
    AllowActions: StringProperty[]
    AllowResources: StringProperty[]
    AllowReferers?: StringProperty[]
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  UpdateTime?: StringProperty
  ForceDelete?: boolean
  Arn?: StringProperty
}

export const AWSLocationAPIKey = ({
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
      Type: 'AWS::Location::APIKey',
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