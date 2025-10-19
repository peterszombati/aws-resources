import {StringProperty} from "../StringProperty"


type Properties = {
  Name: StringProperty
  StackName: StringProperty
  Description?: StringProperty
  AppVisibility: StringProperty
  Attributes: {
    Name: StringProperty
    Value: StringProperty
  }[]
  CreatedTime?: StringProperty
  LastModifiedTime?: StringProperty
}

export const AWSAppStreamEntitlement = ({
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
      Type: 'AWS::AppStream::Entitlement',
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