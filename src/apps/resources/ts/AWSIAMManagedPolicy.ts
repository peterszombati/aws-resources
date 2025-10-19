import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Groups?: StringProperty[]
  ManagedPolicyName?: StringProperty
  Path?: StringProperty
  PolicyDocument: Record<string, any> | StringProperty
  Roles?: StringProperty[]
  Users?: StringProperty[]
  PolicyArn?: StringProperty
  AttachmentCount?: number
  CreateDate?: StringProperty
  UpdateDate?: StringProperty
  DefaultVersionId?: StringProperty
  IsAttachable?: boolean
  PermissionsBoundaryUsageCount?: number
  PolicyId?: StringProperty
}

export const AWSIAMManagedPolicy = ({
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
      Type: 'AWS::IAM::ManagedPolicy',
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