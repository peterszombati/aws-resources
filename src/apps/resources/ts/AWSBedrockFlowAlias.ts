import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  FlowArn: StringProperty
  ConcurrencyConfiguration?: {
    Type: (string | "Automatic" | "Manual")
    MaxConcurrency?: number
  }
  CreatedAt?: StringProperty
  Description?: StringProperty
  FlowId?: StringProperty
  Id?: StringProperty
  Name: StringProperty
  RoutingConfiguration: {
    FlowVersion?: StringProperty
  }[]
  UpdatedAt?: StringProperty
  Tags?: Record<string, any>
}

export const AWSBedrockFlowAlias = ({
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
      Type: 'AWS::Bedrock::FlowAlias',
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