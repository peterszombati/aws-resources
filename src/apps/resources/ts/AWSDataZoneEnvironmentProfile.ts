import {StringProperty} from "../StringProperty"


type Properties = {
  AwsAccountId: StringProperty
  AwsAccountRegion: StringProperty
  CreatedAt?: StringProperty
  CreatedBy?: StringProperty
  Description?: StringProperty
  DomainId?: StringProperty
  DomainIdentifier: StringProperty
  EnvironmentBlueprintId?: StringProperty
  EnvironmentBlueprintIdentifier: StringProperty
  Id?: StringProperty
  Name: StringProperty
  ProjectId?: StringProperty
  ProjectIdentifier: StringProperty
  UpdatedAt?: StringProperty
  UserParameters?: {
    Name?: StringProperty
    Value?: StringProperty
  }[]
}

export const AWSDataZoneEnvironmentProfile = ({
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
      Type: 'AWS::DataZone::EnvironmentProfile',
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