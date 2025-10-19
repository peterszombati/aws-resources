import {StringProperty} from "../StringProperty"


type Properties = {
  Name?: StringProperty
  InstanceArn?: StringProperty
  OwnerAccountId?: StringProperty
  IdentityStoreId?: StringProperty
  Status?: (string | "CREATE_IN_PROGRESS" | "DELETE_IN_PROGRESS" | "ACTIVE")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSSSOInstance = ({
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
      Type: 'AWS::SSO::Instance',
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