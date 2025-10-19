import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  InstanceAccessControlAttributeConfiguration?: {
    AccessControlAttributes: {
      Key: StringProperty
      Value: {
        Source: StringProperty[]
      }
    }[]
  }
  AccessControlAttributes?: {
    Key: StringProperty
    Value: {
      Source: StringProperty[]
    }
  }[]
}

export const AWSSSOInstanceAccessControlAttributeConfiguration = ({
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
      Type: 'AWS::SSO::InstanceAccessControlAttributeConfiguration',
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