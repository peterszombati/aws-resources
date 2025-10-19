import {StringProperty} from "../StringProperty"


type Properties = {
  Arn?: StringProperty
  CodebuildRoleArn?: StringProperty
  ComponentRoleArn?: StringProperty
  EnvironmentAccountId?: StringProperty
  EnvironmentName?: StringProperty
  Id?: StringProperty
  ManagementAccountId?: StringProperty
  RoleArn?: StringProperty
  Status?: (string | "PENDING" | "CONNECTED" | "REJECTED")
  Tags?: {
    Key: StringProperty
    Value: StringProperty
  }[]
}

export const AWSProtonEnvironmentAccountConnection = ({
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
      Type: 'AWS::Proton::EnvironmentAccountConnection',
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