import {StringProperty} from "../StringProperty"


type Properties = {
  TemplateArn?: StringProperty
  TemplateName?: StringProperty
  Description?: StringProperty
  Enabled?: boolean
  ProvisioningRoleArn: StringProperty
  TemplateBody: StringProperty
  TemplateType?: (string | "FLEET_PROVISIONING" | "JITP")
  PreProvisioningHook?: {
    TargetArn?: StringProperty
    PayloadVersion?: StringProperty
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSIoTProvisioningTemplate = ({
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
      Type: 'AWS::IoT::ProvisioningTemplate',
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