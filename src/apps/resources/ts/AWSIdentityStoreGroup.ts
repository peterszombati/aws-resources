import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  DisplayName: StringProperty
  GroupId?: StringProperty
  IdentityStoreId: StringProperty
}

export const AWSIdentityStoreGroup = ({
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
      Type: 'AWS::IdentityStore::Group',
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