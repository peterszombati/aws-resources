import {StringProperty} from "../StringProperty"


type Properties = {
  AwsAccountId?: StringProperty
  AwsAccountRegion?: StringProperty
  EnvironmentAccountIdentifier?: StringProperty
  EnvironmentAccountRegion?: StringProperty
  CreatedAt?: StringProperty
  CreatedBy?: StringProperty
  Description?: StringProperty
  DomainId?: StringProperty
  DomainIdentifier: StringProperty
  EnvironmentBlueprintId?: StringProperty
  EnvironmentProfileId?: StringProperty
  EnvironmentProfileIdentifier?: StringProperty
  GlossaryTerms?: StringProperty[]
  EnvironmentRoleArn?: StringProperty
  Id?: StringProperty
  Name: StringProperty
  ProjectId?: StringProperty
  ProjectIdentifier: StringProperty
  Provider?: StringProperty
  Status?: (string | "ACTIVE" | "CREATING" | "UPDATING" | "DELETING" | "CREATE_FAILED" | "UPDATE_FAILED" | "DELETE_FAILED" | "VALIDATION_FAILED" | "SUSPENDED" | "DISABLED" | "EXPIRED" | "DELETED" | "INACCESSIBLE")
  UpdatedAt?: StringProperty
  UserParameters?: {
    Name?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSDataZoneEnvironment = ({
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
      Type: 'AWS::DataZone::Environment',
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