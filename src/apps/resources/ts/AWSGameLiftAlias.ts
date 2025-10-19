import {StringProperty} from "../StringProperty"


type Properties = {
  Description?: StringProperty
  Name: StringProperty
  RoutingStrategy: {
    Message?: StringProperty
    FleetId?: StringProperty
    Type: (string | "SIMPLE" | "TERMINAL")
  }
  AliasId?: StringProperty
  AliasArn?: StringProperty
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSGameLiftAlias = ({
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
      Type: 'AWS::GameLift::Alias',
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