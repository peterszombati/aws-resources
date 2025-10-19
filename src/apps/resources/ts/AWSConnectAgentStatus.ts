import {StringProperty} from "../StringProperty"


type Properties = {
  InstanceArn: StringProperty
  AgentStatusArn?: StringProperty
  Description?: StringProperty
  Name: StringProperty
  DisplayOrder?: number
  State: (string | "ENABLED" | "DISABLED")
  Type?: (string | "ROUTABLE" | "CUSTOM" | "OFFLINE")
  ResetOrderNumber?: boolean
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
  LastModifiedRegion?: StringProperty
  LastModifiedTime?: number
}

export const AWSConnectAgentStatus = ({
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
      Type: 'AWS::Connect::AgentStatus',
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