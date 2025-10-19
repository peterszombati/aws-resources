import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Description?: StringProperty
  PolicyStoreId?: StringProperty
  ValidationSettings: {
    Mode: (string | "OFF" | "STRICT")
  }
  Schema?: any
  DeletionProtection?: {
    Mode: (string | "ENABLED" | "DISABLED")
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSVerifiedPermissionsPolicyStore = ({
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
      Type: 'AWS::VerifiedPermissions::PolicyStore',
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