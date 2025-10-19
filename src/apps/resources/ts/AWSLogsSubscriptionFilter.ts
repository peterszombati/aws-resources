import {StringProperty} from "../StringProperty"


type Properties = {
  FilterName?: StringProperty
  DestinationArn: StringProperty
  FilterPattern: StringProperty
  LogGroupName: StringProperty
  RoleArn?: StringProperty
  Distribution?: (string | "Random" | "ByLogStream")
  ApplyOnTransformedLogs?: boolean
  FieldSelectionCriteria?: StringProperty
  EmitSystemFields?: StringProperty[]
}

export const AWSLogsSubscriptionFilter = ({
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
      Type: 'AWS::Logs::SubscriptionFilter',
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