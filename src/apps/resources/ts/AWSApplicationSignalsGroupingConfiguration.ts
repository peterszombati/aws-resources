import {StringProperty} from "../StringProperty"


type Properties = {
  GroupingAttributeDefinitions: {
    GroupingName: StringProperty
    GroupingSourceKeys: StringProperty[]
    DefaultGroupingValue?: StringProperty
  }[]
  UpdatedAt?: StringProperty
  AccountId?: StringProperty
}

export const AWSApplicationSignalsGroupingConfiguration = ({
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
      Type: 'AWS::ApplicationSignals::GroupingConfiguration',
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