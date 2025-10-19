import {StringProperty} from "../StringProperty"


type Properties = {
  EventBusName?: StringProperty
  Condition?: {
    Value?: StringProperty
    Type?: StringProperty
    Key?: StringProperty
  }
  Action?: StringProperty
  StatementId: StringProperty
  Statement?: Record<string, any>
  Principal?: StringProperty
}

export const AWSEventsEventBusPolicy = ({
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
      Type: 'AWS::Events::EventBusPolicy',
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