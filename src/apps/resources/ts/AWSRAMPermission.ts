import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  Name: StringProperty
  Version?: StringProperty
  IsResourceTypeDefault?: boolean
  PermissionType?: StringProperty
  ResourceType: StringProperty
  PolicyTemplate: Record<string, any>
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSRAMPermission = ({
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
      Type: 'AWS::RAM::Permission',
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