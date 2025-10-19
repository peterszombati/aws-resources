import {StringProperty} from "../StringProperty"


type Properties = {
  Definition: any
  PolicyId?: StringProperty
  PolicyStoreId: StringProperty
  PolicyType?: (string | "STATIC" | "TEMPLATE_LINKED")
}

export const AWSVerifiedPermissionsPolicy = ({
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
      Type: 'AWS::VerifiedPermissions::Policy',
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