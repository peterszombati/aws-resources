import {StringProperty} from "../StringProperty"


type Properties = {
  ProtectionId?: StringProperty
  ProtectionArn?: StringProperty
  Name: StringProperty
  ResourceArn: StringProperty
  HealthCheckArns?: StringProperty[]
  ApplicationLayerAutomaticResponseConfiguration?: {
    Action: Record<string, any>
    Status: (string | "ENABLED" | "DISABLED")
  }
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSShieldProtection = ({
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
      Type: 'AWS::Shield::Protection',
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