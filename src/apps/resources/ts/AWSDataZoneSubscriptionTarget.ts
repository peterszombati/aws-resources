import {StringProperty} from "../StringProperty"


type Properties = {
  ApplicableAssetTypes: StringProperty[]
  AuthorizedPrincipals: StringProperty[]
  CreatedAt?: StringProperty
  CreatedBy?: StringProperty
  DomainId?: StringProperty
  DomainIdentifier: StringProperty
  EnvironmentId?: StringProperty
  EnvironmentIdentifier: StringProperty
  Id?: StringProperty
  ManageAccessRole?: StringProperty
  Name: StringProperty
  ProjectId?: StringProperty
  Provider?: StringProperty
  SubscriptionTargetConfig: {
    FormName: StringProperty
    Content: StringProperty
  }[]
  Type: StringProperty
  UpdatedAt?: StringProperty
  UpdatedBy?: StringProperty
}

export const AWSDataZoneSubscriptionTarget = ({
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
      Type: 'AWS::DataZone::SubscriptionTarget',
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