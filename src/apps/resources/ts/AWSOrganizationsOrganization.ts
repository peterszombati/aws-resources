import {StringProperty} from "../StringProperty"


type Properties = {
  Id?: StringProperty
  Arn?: StringProperty
  FeatureSet?: (string | "ALL" | "CONSOLIDATED_BILLING")
  ManagementAccountArn?: StringProperty
  ManagementAccountId?: StringProperty
  ManagementAccountEmail?: StringProperty
  RootId?: StringProperty
}

export const AWSOrganizationsOrganization = ({
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
      Type: 'AWS::Organizations::Organization',
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