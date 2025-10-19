import {StringProperty} from "../StringProperty"


type Properties = {
  AccountId?: StringProperty
  PolicyName: StringProperty
  PolicyDocument: StringProperty
  PolicyType: (string | "DATA_PROTECTION_POLICY" | "SUBSCRIPTION_FILTER_POLICY" | "FIELD_INDEX_POLICY" | "TRANSFORMER_POLICY" | "METRIC_EXTRACTION_POLICY")
  Scope?: (string | "ALL")
  SelectionCriteria?: StringProperty
}

export const AWSLogsAccountPolicy = ({
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
      Type: 'AWS::Logs::AccountPolicy',
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