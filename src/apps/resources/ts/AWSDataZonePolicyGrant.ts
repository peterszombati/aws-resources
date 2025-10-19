import {StringProperty} from "../StringProperty"


type Properties = {
  Detail?: any
  DomainIdentifier: StringProperty
  EntityIdentifier: StringProperty
  EntityType: (string | "DOMAIN_UNIT" | "ENVIRONMENT_BLUEPRINT_CONFIGURATION" | "ENVIRONMENT_PROFILE" | "ASSET_TYPE")
  GrantId?: StringProperty
  CreatedAt?: StringProperty
  CreatedBy?: StringProperty
  PolicyType: (string | "CREATE_DOMAIN_UNIT" | "OVERRIDE_DOMAIN_UNIT_OWNERS" | "ADD_TO_PROJECT_MEMBER_POOL" | "OVERRIDE_PROJECT_OWNERS" | "CREATE_GLOSSARY" | "CREATE_FORM_TYPE" | "CREATE_ASSET_TYPE" | "CREATE_PROJECT" | "CREATE_ENVIRONMENT_PROFILE" | "DELEGATE_CREATE_ENVIRONMENT_PROFILE" | "CREATE_ENVIRONMENT" | "CREATE_ENVIRONMENT_FROM_BLUEPRINT" | "CREATE_PROJECT_FROM_PROJECT_PROFILE")
  Principal?: any
}

export const AWSDataZonePolicyGrant = ({
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
      Type: 'AWS::DataZone::PolicyGrant',
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